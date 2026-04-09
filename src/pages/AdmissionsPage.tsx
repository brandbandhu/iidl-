import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { step: 1, title: "Registration", desc: "Fill up the registration form and pay a registration fee of ₹1,000 before the deadline. Proof of payment to be emailed to info@iidl.org.in. Application form fee is not refundable.", icon: FileText },
  { step: 2, title: "Interview", desc: "If shortlisted, you'll receive a call for the interview round through email and phone call from IIDL office.", icon: Users },
  { step: 3, title: "Selection", desc: "After the interview, selected candidates would be intimated for the admission process through email and call from IIDL office.", icon: CheckCircle },
];

const faqs = [
  { q: "What is the duration of PGP-LPG?", a: "The programme is 9 months, fully residential at RMP's Knowledge Excellence Centre near Mumbai." },
  { q: "What is the eligibility criteria?", a: "Graduates from any discipline aged 21-30 years who are interested in politics, governance, and public leadership." },
  { q: "What is the fee structure?", a: "Please contact IIDL office at +91 72080 70878 or email iidl@rmponweb.org for detailed fee information." },
  { q: "Is financial assistance available?", a: "Yes, scholarships and fee concessions are available for deserving candidates based on merit and need." },
  { q: "What are the career prospects?", a: "Alumni work in politics, policy research, parliament, think tanks, media, NGOs, and governance roles across India." },
];

const AdmissionsPage = () => (
  <>
    <Breadcrumb items={[{ label: "Admissions" }]} />

    {/* Application Process */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading subtitle="How To Apply" title="Application Process" description="Three simple steps to begin your leadership journey" />
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map(({ step, title, desc, icon: Icon }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass-card rounded-xl p-8 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-full gradient-maroon flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center mx-auto -mt-8 mb-3 text-foreground text-sm font-bold relative z-10">
                {step}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://iidl.org.in/apply-now"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-maroon text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    {/* Fee Card */}
    <section className="section-padding bg-ivory">
      <div className="container-main max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl overflow-hidden">
          <div className="gradient-maroon p-6 text-center">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground">Programme Fee</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">PGP-LPG 2026-27</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Registration Fee</span>
              <span className="font-semibold text-foreground">₹1,000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Programme Fee</span>
              <span className="font-semibold text-foreground">Contact Office</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sm text-muted-foreground">Scholarships</span>
              <span className="font-semibold text-gold">Available</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4">*Includes accommodation, meals, study material, and field visits. Contact IIDL for detailed fee breakdown.</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FAQs */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-3xl mx-auto">
        <SectionHeading subtitle="Questions?" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="glass-card rounded-xl overflow-hidden">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="px-6 py-4 text-foreground font-medium text-sm hover:text-primary text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default AdmissionsPage;
