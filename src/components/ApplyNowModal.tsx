import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, CreditCard, ShieldCheck, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RAZORPAY_KEY_ID = "rzp_live_SfkT0AbxjFFJOh";
const TEST_PAYMENT_AMOUNT = 10;
const TEST_PAYMENT_AMOUNT_PAISE = TEST_PAYMENT_AMOUNT * 100;
const APPLY_STORAGE_KEY = "iidl-apply-now-registration";

const stateOptions = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

type ApplicationForm = {
  name: string;
  email: string;
  contactNumber: string;
  dateOfBirth: string;
  gender: string;
  state: string;
  address: string;
  educationalQualification: string;
  occupation: string;
  employmentHistory: string;
  socialPoliticalContribution: string;
  shortTermGoal: string;
  longTermGoal: string;
  biggestChallenges: string;
  roleModel: string;
  oneChange: string;
  statementOfPurpose: string;
  verificationCode: string;
  honeypot: string;
  cvFileName: string;
};

type StoredRegistration = {
  registeredAt: string;
  paid: boolean;
  form: ApplicationForm;
  paymentId?: string;
};

const defaultForm: ApplicationForm = {
  name: "",
  email: "",
  contactNumber: "",
  dateOfBirth: "",
  gender: "",
  state: "",
  address: "",
  educationalQualification: "",
  occupation: "",
  employmentHistory: "",
  socialPoliticalContribution: "",
  shortTermGoal: "",
  longTermGoal: "",
  biggestChallenges: "",
  roleModel: "",
  oneChange: "",
  statementOfPurpose: "",
  verificationCode: "",
  honeypot: "",
  cvFileName: "",
};

const fieldClassName =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

const loadRazorpayScript = () =>
  new Promise<boolean>((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true), { once: true });
      existingScript.addEventListener("error", () => resolve(false), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const saveRegistration = (payload: StoredRegistration) => {
  localStorage.setItem(APPLY_STORAGE_KEY, JSON.stringify(payload));
};

const readRegistration = (): StoredRegistration | null => {
  const raw = localStorage.getItem(APPLY_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as StoredRegistration;
  } catch {
    return null;
  }
};

const textareaRules = [
  { key: "socialPoliticalContribution", label: "Social/Political Contribution" },
  { key: "shortTermGoal", label: "Short term goal" },
  { key: "longTermGoal", label: "Long term goal" },
  { key: "biggestChallenges", label: "Name 3 biggest challenges before India" },
  { key: "roleModel", label: "Who is your role model and why?" },
  { key: "oneChange", label: "One thing you would change" },
  { key: "statementOfPurpose", label: "Why do you want to join this course?" },
] as const;

type ApplyNowModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ApplyNowModal = ({ open, onOpenChange }: ApplyNowModalProps) => {
  const [form, setForm] = useState<ApplicationForm>(defaultForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stage, setStage] = useState<"form" | "payment" | "done">("form");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    if (!open || stage !== "done") return;

    const timeout = window.setTimeout(() => {
      onOpenChange(false);
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, [open, stage, onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const savedRegistration = readRegistration();
    if (!savedRegistration) {
      setForm(defaultForm);
      setStage("form");
      setStatusMessage("");
      setPaymentId("");
      return;
    }

    setForm(savedRegistration.form);
    setPaymentId(savedRegistration.paymentId ?? "");
    setStage(savedRegistration.paid ? "done" : "payment");
    setStatusMessage(
      savedRegistration.paid
        ? "Your application and payment are already marked as completed on this device."
        : "Registration details found on this device. You can continue to the payment step.",
    );
  }, [open]);

  useEffect(() => {
    if (open) return;

    const savedRegistration = readRegistration();
    if (!savedRegistration?.paid) return;

    setForm(defaultForm);
    setErrors({});
    setStage("form");
    setStatusMessage("");
    setPaymentId("");
    localStorage.removeItem(APPLY_STORAGE_KEY);
  }, [open]);

  const textAreaMetadata = useMemo(() => textareaRules, []);

  const setField = <K extends keyof ApplicationForm>(key: K, value: ApplicationForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    const requiredFields: Array<[keyof ApplicationForm, string]> = [
      ["name", "Name is required."],
      ["email", "Email is required."],
      ["contactNumber", "Contact number is required."],
      ["dateOfBirth", "Date of birth is required."],
      ["gender", "Gender is required."],
      ["state", "State is required."],
      ["address", "Address is required."],
      ["educationalQualification", "Educational qualification is required."],
      ["occupation", "Occupation is required."],
      ["employmentHistory", "Employment history is required."],
      ["cvFileName", "Please upload your latest CV."],
      ["verificationCode", "Please enter any two digits for verification."],
    ];

    requiredFields.forEach(([key, message]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = message;
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.contactNumber && !/^\d{10,15}$/.test(form.contactNumber.replace(/\D/g, ""))) {
      nextErrors.contactNumber = "Please enter a valid contact number.";
    }

    if (form.verificationCode && !/^\d{2}$/.test(form.verificationCode.trim())) {
      nextErrors.verificationCode = "Verification must be exactly two digits.";
    }

    if (form.honeypot.trim()) {
      nextErrors.honeypot = "Spam protection triggered. Please clear the hidden field.";
    }

    textAreaMetadata.forEach(({ key, label }) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleRegistrationSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    saveRegistration({
      registeredAt: new Date().toISOString(),
      paid: false,
      form,
    });

    setStage("payment");
    setStatusMessage("Registration completed successfully. Continue with the Rs. 10 test payment.");
  };

  const markPaymentSuccess = (paymentId: string) => {
    saveRegistration({
      registeredAt: new Date().toISOString(),
      paid: true,
      paymentId,
      form,
    });
    setPaymentId(paymentId);
    setStage("done");
    setStatusMessage("Payment done successfully.");
    setIsProcessingPayment(false);
  };

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    setStatusMessage("");

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setStatusMessage("Razorpay checkout could not be loaded. Please try again.");
      setIsProcessingPayment(false);
      return;
    }

    const razorpay = new window.Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: TEST_PAYMENT_AMOUNT_PAISE,
      currency: "INR",
      name: "Indian Institute of Democratic Leadership",
      description: "PGP-LPG registration test payment",
      image: "/favicon.png",
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.contactNumber,
      },
      notes: {
        programme: "PGP-LPG 2026-27",
        applicant_name: form.name,
      },
      theme: {
        color: "#b57a1f",
      },
      handler: (response) => {
        markPaymentSuccess(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: () => {
          setStatusMessage("Payment window closed before completion.");
          setIsProcessingPayment(false);
        },
      },
    });

    razorpay.open();
    setIsProcessingPayment(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto rounded-2xl border-none p-0 sm:rounded-2xl">
        <div className="gradient-maroon px-6 py-5 sm:px-8">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-2xl text-primary-foreground">Apply Now</DialogTitle>
            <DialogDescription className="text-primary-foreground/75">
              Post Graduate Programme in Leadership, Politics & Governance (2026-27)
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="bg-background px-6 py-6 sm:px-8 sm:py-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <div className={`rounded-full px-4 py-2 font-medium ${stage === "form" ? "gradient-maroon text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              1. Registration Form
            </div>
            <div className={`rounded-full px-4 py-2 font-medium ${stage === "payment" ? "gradient-maroon text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              2. Rs. 10 Test Payment
            </div>
            <div className={`rounded-full px-4 py-2 font-medium ${stage === "done" ? "gradient-maroon text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              3. Completion
            </div>
          </div>

          {statusMessage ? (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-foreground">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <p>{statusMessage}</p>
            </div>
          ) : null}

          {stage === "form" ? (
            <form onSubmit={handleRegistrationSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Name *</label>
                  <input value={form.name} onChange={(e) => setField("name", e.target.value)} className={fieldClassName} />
                  {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} className={fieldClassName} />
                  {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Contact Number *</label>
                  <input value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} className={fieldClassName} />
                  {errors.contactNumber ? <p className="mt-1 text-xs text-destructive">{errors.contactNumber}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Date of Birth *</label>
                  <input type="date" value={form.dateOfBirth} onChange={(e) => setField("dateOfBirth", e.target.value)} className={fieldClassName} />
                  {errors.dateOfBirth ? <p className="mt-1 text-xs text-destructive">{errors.dateOfBirth}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Gender *</label>
                  <select value={form.gender} onChange={(e) => setField("gender", e.target.value)} className={fieldClassName}>
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender ? <p className="mt-1 text-xs text-destructive">{errors.gender}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">State *</label>
                  <select value={form.state} onChange={(e) => setField("state", e.target.value)} className={fieldClassName}>
                    <option value="">Please choose your state</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state ? <p className="mt-1 text-xs text-destructive">{errors.state}</p> : null}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Address *</label>
                <textarea value={form.address} onChange={(e) => setField("address", e.target.value)} rows={3} className={fieldClassName} />
                {errors.address ? <p className="mt-1 text-xs text-destructive">{errors.address}</p> : null}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Educational Qualification *</label>
                  <input value={form.educationalQualification} onChange={(e) => setField("educationalQualification", e.target.value)} className={fieldClassName} />
                  {errors.educationalQualification ? <p className="mt-1 text-xs text-destructive">{errors.educationalQualification}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Occupation *</label>
                  <input value={form.occupation} onChange={(e) => setField("occupation", e.target.value)} className={fieldClassName} />
                  {errors.occupation ? <p className="mt-1 text-xs text-destructive">{errors.occupation}</p> : null}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Employment History *</label>
                <textarea value={form.employmentHistory} onChange={(e) => setField("employmentHistory", e.target.value)} rows={3} className={fieldClassName} />
                {errors.employmentHistory ? <p className="mt-1 text-xs text-destructive">{errors.employmentHistory}</p> : null}
              </div>

              {textAreaMetadata.map(({ key, label }) => (
                <div key={key}>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {label} *
                  </label>
                  <textarea value={form[key]} onChange={(e) => setField(key, e.target.value)} rows={key === "statementOfPurpose" ? 8 : 5} className={fieldClassName} />
                  {errors[key] ? <p className="mt-1 text-xs text-destructive">{errors[key]}</p> : null}
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Upload your latest CV *</label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-secondary/40 px-4 py-4 text-sm text-foreground hover:border-primary/40">
                  <Upload className="h-4 w-4 text-primary" />
                  <span>{form.cvFileName || "Upload your CV in Word or PDF format only"}</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setField("cvFileName", e.target.files?.[0]?.name ?? "")}
                  />
                </label>
                {errors.cvFileName ? <p className="mt-1 text-xs text-destructive">{errors.cvFileName}</p> : null}
              </div>

              <div className="rounded-xl border border-border bg-secondary/30 p-4">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Verification</h3>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Please enter any two digits *</label>
                    <input value={form.verificationCode} onChange={(e) => setField("verificationCode", e.target.value)} className={fieldClassName} placeholder="Example: 12" />
                    {errors.verificationCode ? <p className="mt-1 text-xs text-destructive">{errors.verificationCode}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">This box is for spam protection - please leave it blank</label>
                    <input value={form.honeypot} onChange={(e) => setField("honeypot", e.target.value)} className={fieldClassName} />
                    {errors.honeypot ? <p className="mt-1 text-xs text-destructive">{errors.honeypot}</p> : null}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">After successful registration, the popup will show the Rs. 10 payment step.</p>
                <button type="submit" className="gradient-maroon rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  Register Successfully
                </button>
              </div>
            </form>
          ) : null}

          {stage === "payment" ? (
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-secondary/20 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Proceed to Test Payment</h3>
                    <p className="text-sm text-muted-foreground">Your form is saved on this device. Complete the payment to finish the flow.</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-background p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Applicant</p>
                    <p className="mt-1 font-semibold text-foreground">{form.name}</p>
                    <p className="text-sm text-muted-foreground">{form.email}</p>
                    <p className="text-sm text-muted-foreground">{form.contactNumber}</p>
                  </div>
                  <div className="rounded-xl bg-background p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Payment amount</p>
                    <p className="mt-1 text-3xl font-bold text-foreground">Rs. {TEST_PAYMENT_AMOUNT}</p>
                    <p className="text-sm text-muted-foreground">Razorpay test payment for the Apply Now flow</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p>
                  This frontend uses the public Razorpay key only. The private Razorpay secret must stay on a backend and is not exposed in browser code.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={isProcessingPayment}
                  className="gradient-maroon rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isProcessingPayment ? "Opening Razorpay..." : `Pay Rs. ${TEST_PAYMENT_AMOUNT}`}
                </button>
                <button
                  type="button"
                  onClick={() => setStage("form")}
                  className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Edit Registration
                </button>
              </div>
            </div>
          ) : null}

          {stage === "done" ? (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-9 w-9 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold text-foreground">Payment Done</h3>
                <p className="mt-2 text-muted-foreground">The application and payment for this device are marked as completed on this landing page.</p>
                <p className="mt-2 text-sm text-muted-foreground">This popup will close automatically in a few seconds and will be ready for a fresh application next time.</p>
              </div>
              {paymentId ? (
                <p className="text-sm text-muted-foreground">
                  Razorpay payment ID: <span className="font-medium text-foreground">{paymentId}</span>
                </p>
              ) : null}
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="gradient-maroon rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Close
              </button>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyNowModal;
