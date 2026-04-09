import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Users, MapPin, BookOpen, ChevronLeft, ChevronRight, Quote,
  ArrowRight, Award, Building2, Target, Globe, Briefcase, Clock, FileText,
  CheckCircle, Phone, Mail, Send,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import logo from "@/assets/logo.png";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ─────────────── HERO CAROUSEL ─────────────── */
const slides = [
  { image: hero1, title: "Shape the Future of Indian Democracy", subtitle: "Become a trained, ethical, and responsible leader — New Leaders for a New India" },
  { image: hero2, title: "9-Month Intensive Leadership Programme", subtitle: "Post Graduate Programme in Leadership, Politics & Governance (PGP-LPG)" },
  { image: hero3, title: "World-Class Campus & Learning Experience", subtitle: "15-acre Knowledge Excellence Centre by Rambhau Mhalgi Prabodhini, near Mumbai" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative h-[84vh] md:h-[96vh] lg:h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
          <img src={slides[current].image} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-6 top-6 z-20">
        <div className="inline-flex rounded-2xl p-0.5">
          <img src={logo} alt="IIDL Logo" className="h-[110px] w-[110px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] object-contain" />
        </div>
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <motion.div key={`t-${current}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="max-w-2xl">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">Indian Institute of Democratic Leadership</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">{slides[current].title}</h1>
            <p className="text-lg text-primary-foreground/80 mb-8">{slides[current].subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("#admissions")} className="gradient-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo("#programme")} className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-gold w-8" : "bg-primary-foreground/40"}`} />
        ))}
      </div>
      <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm hidden md:flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
      <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm hidden md:flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"><ChevronRight className="w-5 h-5" /></button>
    </section>
  );
};

/* ─────────────── STATS STRIP ─────────────── */
const StatsStrip = () => (
  <section className="gradient-maroon py-12">
    <div className="container-main px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      <AnimatedCounter end={200} suffix="+" label="Alumni" />
      <AnimatedCounter end={22} suffix="+" label="States Represented" />
      <AnimatedCounter end={9} label="Months Programme" />
      <AnimatedCounter end={30} label="Seats Only" />
    </div>
  </section>
);

/* ─────────────── ABOUT ─────────────── */
const AboutSection = () => (
  <section id="about" className="section-padding bg-ivory scroll-mt-20">
    <div className="container-main">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Indian Institute of Democratic Leadership</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Indian Institute of Democratic Leadership (IIDL), an initiative of Rambhau Mhalgi Prabodhini, is designed to produce trained, ethical, and responsible leaders. In short, "New Leaders for a New India."
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The objective of IIDL is to provide a deep insight into the socio-political ground reality of India, to inculcate and enhance leadership values and capacities, and to equip participants with the necessary skill-sets for having a career in politics, public affairs, voluntary organisations and allied areas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            197 students from 22 states of India have completed the course and are contributing to nation-building.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[{ icon: Users, label: "197+ Alumni" }, { icon: Globe, label: "22+ States" }, { icon: Award, label: "UN Recognised" }].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center p-4 glass-card rounded-lg">
                <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-xs font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={hero3} alt="IIDL Campus" className="rounded-xl shadow-lg w-full" loading="lazy" />
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="mt-20">
        <SectionHeading subtitle="Our Journey" title="Institutional Legacy" />
        <div className="max-w-3xl mx-auto">
          {[
            { year: "1982", title: "RMP Founded", desc: "Rambhau Mhalgi Prabodhini established as a training and research academy." },
            { year: "2014", title: "IIDL Conceived", desc: "Vision for a dedicated institute for democratic leadership training." },
            { year: "2017", title: "First Batch", desc: "PGP-LPG programme launched with the inaugural batch of students." },
            { year: "2024", title: "7+ Batches", desc: "197+ alumni from 22+ states contributing to nation-building." },
          ].map((item, i, arr) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-maroon flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">{item.year}</div>
                {i < arr.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RMP */}
      <div className="mt-16 gradient-maroon rounded-2xl p-8 md:p-12 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">Parent Organisation</p>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">About Rambhau Mhalgi Prabodhini</h3>
        <div className="section-divider mb-4" />
        <p className="max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed mb-8">
          Established in 1982, Rambhau Mhalgi Prabodhini (RMP) is a unique Training and Research Academy aimed at enhancing capabilities of voluntary activists and elected representatives. RMP has an excellent state-of-the-art training facility spread over 15 acres on the outskirts of Mumbai, known as Knowledge Excellence Centre (KEC). RMP is recognised by the United Nations as a Special Consultative NGO.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          {[{ icon: Building2, label: "15-Acre Campus" }, { icon: Target, label: "UN Recognised NGO" }, { icon: BookOpen, label: "Est. 1982" }].map(({ icon: Icon, label }) => (
            <div key={label} className="text-center p-3 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <Icon className="w-5 h-5 text-gold mx-auto mb-1.5" />
              <p className="text-xs font-semibold text-primary-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── WHY IIDL ─────────────── */
const WhyIIDL = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <SectionHeading subtitle="Why Choose Us" title="Why IIDL?" description="A unique blend of academic learning, field exposure, and political simulation" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: BookOpen, title: "Classroom Learning", desc: "Rigorous academic curriculum covering leadership, politics, governance, economics, and public policy taught by domain experts and practitioners." },
          { icon: MapPin, title: "Field Exposure", desc: "Real-world exposure through election campaigns, constituency visits, embassy tours, ministry visits, and grassroots community engagement." },
          { icon: Users, title: "Political Simulation", desc: "Model Parliament, Model G20, Model United Nations, and other simulations to develop practical political skills and strategic thinking." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group glass-card rounded-xl p-8 hover-lift cursor-default">
            <div className="w-14 h-14 rounded-lg gradient-maroon flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────── PROGRAMME ─────────────── */
const ProgrammeSection = () => (
  <section id="programme" className="scroll-mt-20">
    {/* Programme Hero */}
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero1} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>
      <div className="relative z-10 container-main px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Flagship Programme</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">Post Graduate Programme in Leadership, Politics & Governance</h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            A unique interdisciplinary 9-month residential course designed to close the gap between young talent and India's democratic political entity and governance. The programme produces trained, ethical and responsible leaders — "New Leaders for a New India."
          </p>
        </motion.div>
      </div>
    </div>

    {/* Key Features */}
    <div className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading subtitle="Programme Highlights" title="What Makes PGP-LPG Unique?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Academic Learning", desc: "Comprehensive curriculum covering political science, governance, public policy, economics, international relations, and leadership studies." },
            { icon: MapPin, title: "Field Visits", desc: "Exposure visits to embassies, ministries, commissions, rural and tribal areas, and real election campaigns across India." },
            { icon: Briefcase, title: "Internships", desc: "Hands-on experience through internships with elected representatives, think tanks, and public policy organizations." },
            { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from domain experts, senior politicians, bureaucrats, diplomats, economists, and acclaimed academicians." },
            { icon: Clock, title: "9-Month Residential", desc: "An immersive residential programme at RMP's 15-acre Knowledge Excellence Centre near Mumbai." },
            { icon: Users, title: "Peer Network", desc: "Build lifelong connections with 30 fellow students from across 22+ states of India." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-7 hover-lift">
              <div className="w-12 h-12 rounded-lg gradient-maroon flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Who Can Attend */}
    <div className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img src={hero2} alt="Students" className="rounded-xl shadow-lg w-full" loading="lazy" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">Eligibility</p>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">Who Can Attend?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">The programme is targeted at students and young professionals who wish to make a career in the field of politics, governance, public affairs and leadership.</p>
            <ul className="space-y-4">
              {["Graduates from any discipline (21-30 years)", "Aspiring political leaders and public servants", "Young professionals interested in governance", "Social workers and community organizers"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center mt-0.5 shrink-0"><span className="text-foreground text-xs">✓</span></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── CURRICULUM ─────────────── */
const semester1 = [
  { title: "Indian Political System", desc: "Study of India's constitutional framework, parliamentary democracy, federal structure, and political parties." },
  { title: "Leadership Studies", desc: "Principles of leadership, communication, team building, crisis management, and ethical leadership." },
  { title: "Public Policy & Governance", desc: "Understanding policy-making processes, governance structures, bureaucracy, and public administration." },
  { title: "Economics for Leaders", desc: "Macroeconomics, development economics, fiscal policy, and economic planning relevant to governance." },
  { title: "Political Communication", desc: "Media management, public speaking, speech writing, social media strategy, and campaign communication." },
];
const semester2 = [
  { title: "International Relations", desc: "India's foreign policy, diplomacy, global institutions, and geopolitical challenges." },
  { title: "Election Management", desc: "Electoral systems, campaign strategy, voter behavior, booth management, and election law." },
  { title: "Constituency Development", desc: "Constituency profiling, vision document creation, stakeholder engagement, and local governance." },
  { title: "Social Entrepreneurship", desc: "Innovation in social impact, NGO management, CSR, and community development." },
  { title: "Capstone Project", desc: "Constituency profiling and vision document for an assigned assembly constituency." },
];

const CurriculumSection = () => (
  <section id="curriculum" className="section-padding bg-background scroll-mt-20">
    <div className="container-main">
      <SectionHeading subtitle="Course Structure" title="Curriculum Overview" description="A comprehensive 9-month curriculum blending theory with practice" />
      <div className="max-w-3xl mx-auto space-y-8">
        {[{ title: "Semester 1 — Foundation", subjects: semester1 }, { title: "Semester 2 — Advanced & Applied", subjects: semester2 }].map((sem, si) => (
          <motion.div key={sem.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.15 }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full gradient-maroon text-primary-foreground flex items-center justify-center text-sm font-bold">{si + 1}</span>
              {sem.title}
            </h3>
            <Accordion type="single" collapsible className="glass-card rounded-xl overflow-hidden">
              {sem.subjects.map((sub, i) => (
                <AccordionItem key={i} value={`${si}-${i}`} className="border-border">
                  <AccordionTrigger className="px-6 py-4 text-foreground font-medium text-sm hover:text-primary">{sub.title}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground text-sm">{sub.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────── ADMISSIONS ─────────────── */
const steps = [
  { step: 1, title: "Registration", desc: "Fill the registration form and pay a registration fee of ₹1,000 before the deadline. Proof of payment to be emailed to info@iidl.org.in. Application form fee is not refundable.", icon: FileText },
  { step: 2, title: "Interview", desc: "If shortlisted, you'll receive a call for the interview round through email and phone call from IIDL office.", icon: Users },
  { step: 3, title: "Selection", desc: "After the interview, selected candidates will be intimated for the admission process through email and call from IIDL office.", icon: CheckCircle },
];
const faqs = [
  { q: "What is the duration of PGP-LPG?", a: "The programme is 9 months, fully residential at RMP's Knowledge Excellence Centre near Mumbai." },
  { q: "What is the eligibility criteria?", a: "Graduates from any discipline aged 21-30 years who are interested in politics, governance, and public leadership." },
  { q: "What is the fee structure?", a: "Please contact IIDL office at +91 72080 70878 or email iidl@rmponweb.org for detailed fee information." },
  { q: "Is financial assistance available?", a: "Yes, scholarships and fee concessions are available for deserving candidates based on merit and need." },
  { q: "What are the career prospects?", a: "Alumni work in politics, policy research, parliament, think tanks, media, NGOs, and governance roles across India." },
];

const AdmissionsSection = () => (
  <section id="admissions" className="scroll-mt-20">
    {/* Steps */}
    <div className="section-padding bg-ivory">
      <div className="container-main">
        <SectionHeading subtitle="How To Apply" title="Application Process" description="Three simple steps to begin your leadership journey" />
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map(({ step, title, desc, icon: Icon }, i) => (
            <motion.div key={step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative glass-card rounded-xl p-8 text-center hover-lift">
              <div className="w-14 h-14 rounded-full gradient-maroon flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center mx-auto -mt-8 mb-3 text-foreground text-sm font-bold relative z-10">{step}</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://iidl.org.in/apply-now" target="_blank" rel="noopener noreferrer" className="gradient-maroon text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    {/* Fee + FAQ */}
    <div className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fee Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl overflow-hidden self-start">
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
              <p className="text-xs text-muted-foreground mt-4">*Includes accommodation, meals, study material, and field visits.</p>
            </div>
          </motion.div>

          {/* FAQs */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="glass-card rounded-xl overflow-hidden">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="px-6 py-4 text-foreground font-medium text-sm hover:text-primary text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground text-sm">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── ALUMNI ─────────────── */
const testimonials = [
  { name: "Manohar", batch: "Batch IV", text: "IIDL has been a turning point in my career and life. It moulded me into the professional that I am today and is the primary reason why I got the opportunity to work in parliament.", outcome: "Research Associate, Lok Sabha Secretariat" },
  { name: "Satyavardhandas Bairagi", batch: "Batch VI", text: "RMP-IIDL is an institute where I discovered my personality in a more structured manner and improved my existing skills in Leadership, Politics & Governance.", outcome: "Political Researcher" },
  { name: "Dharmesh Agrawal", batch: "Batch VII", text: "With no political background, IIDL has played the paramount role in boosting my confidence. I learned that there are lots of opportunities to excel — Political Strategist, Advisor, War Room Management.", outcome: "Political Strategist" },
  { name: "Prince Tiwari", batch: "Batch VI", text: "IIDL has been a transformative experience, offering a unique perspective on Indian policy making and politics. Outdoor visits to embassies, ministries provided unparalleled insights.", outcome: "Public Policy Analyst" },
  { name: "Shankar Ravi", batch: "Batch VII", text: "IIDL gives you a platform to connect with who's who of our country in the domain of politics. Candidates must take full advantage of this platform to become tomorrow's leaders.", outcome: "Political Consultant" },
  { name: "Nitesh Kumar Tripati", batch: "Batch VII", text: "The highlight was the Constituency Profiling and Vision Document project in Shahapur Assembly Constituency — an unparalleled experience.", outcome: "Constituency Researcher" },
];

const stateList = [
  "Maharashtra", "Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh",
  "Bihar", "Jharkhand", "Karnataka", "Tamil Nadu", "Assam",
  "West Bengal", "Odisha", "Chhattisgarh", "Haryana", "Uttarakhand",
  "Delhi", "Telangana", "Andhra Pradesh", "Kerala", "Punjab",
  "Jammu & Kashmir", "Goa",
];

const AlumniSection = () => {
  const [currentT, setCurrentT] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrentT((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="alumni" className="scroll-mt-20">
      {/* Testimonials Slider */}
      <div className="section-padding gradient-maroon">
        <div className="container-main">
          <SectionHeading subtitle="Alumni Stories" title="What Our Alumni Say" light />
          <div className="max-w-3xl mx-auto relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={currentT} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-center">
                <Quote className="w-10 h-10 text-gold mx-auto mb-6" />
                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-4 italic">"{testimonials[currentT].text}"</p>
                <p className="font-heading text-xl font-semibold text-primary-foreground">{testimonials[currentT].name}</p>
                <p className="text-gold text-sm">{testimonials[currentT].batch}</p>
                <p className="text-primary-foreground/60 text-xs mt-1 flex items-center justify-center gap-1"><Briefcase className="w-3 h-3" /> {testimonials[currentT].outcome}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentT(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentT ? "bg-gold w-6" : "bg-primary-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* States */}
      <div className="section-padding bg-ivory">
        <div className="container-main">
          <SectionHeading subtitle="Pan-India Reach" title="Alumni Across 22+ States" />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {stateList.map((state, i) => (
              <motion.span key={state} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex items-center gap-1.5 px-4 py-2 glass-card rounded-full text-sm text-foreground">
                <MapPin className="w-3 h-3 text-primary" />{state}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading subtitle="Success Stories" title="Alumni Testimonials" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((alum, i) => (
              <motion.div key={alum.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 hover-lift">
                <Quote className="w-8 h-8 text-gold/30 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">"{alum.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-bold text-foreground">{alum.name}</p>
                  <p className="text-xs text-gold">{alum.batch}</p>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1"><Briefcase className="w-3 h-3" />{alum.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Outcomes */}
      <div className="section-padding gradient-maroon">
        <div className="container-main">
          <SectionHeading subtitle="Career Outcomes" title="Where Our Alumni Work" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["Parliament & Legislature", "Political Parties", "Public Policy Think Tanks", "Government & Bureaucracy", "Media & Journalism", "NGOs & Civil Society", "Election Management", "Political Consulting"].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                <p className="text-sm text-primary-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── CONTACT ─────────────── */
const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-ivory scroll-mt-20">
      <div className="container-main">
        <SectionHeading subtitle="Get In Touch" title="Contact Us" description="We'd love to hear from you. Reach out with any questions about IIDL or the PGP-LPG programme." />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", lines: ["Rambhau Mhalgi Prabodhini,", "Uttan, Bhayander (W),", "Thane, Maharashtra - 401106"] },
              { icon: Phone, title: "Phone", lines: ["+91 72080 70878"] },
              { icon: Mail, title: "Email", lines: ["iidl@rmponweb.org", "info@iidl.org.in"] },
              { icon: Clock, title: "Office Hours", lines: ["Mon - Sat: 10:00 AM - 6:00 PM"] },
            ].map(({ icon: Icon, title, lines }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-maroon flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{title}</h3>
                  {lines.map((line, li) => (<p key={li} className="text-muted-foreground text-sm">{line}</p>))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="glass-card rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4"><Send className="w-8 h-8 text-foreground" /></div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your message has been sent. We'll get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-semibold text-sm hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  <input type="email" placeholder="Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <textarea placeholder="Your Message *" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" />
                <button type="submit" className="w-full gradient-maroon text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div className="mt-12 rounded-xl overflow-hidden shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.123!2d72.8!3d19.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="IIDL Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────── LEAD CAPTURE ─────────────── */
const LeadCapture = () => {
  const [form, setForm] = useState({ name: "", phone: "", state: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you shortly.");
    setForm({ name: "", phone: "", state: "" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">Interested?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Request a Callback</h2>
            <div className="section-divider mb-4 !mx-0" />
            <p className="text-muted-foreground">Fill in your details and our counsellor will reach out to you with all the information about PGP-LPG 2026-27.</p>
          </div>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-8 space-y-5">
            <input type="text" placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            <input type="text" placeholder="State" required value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            <button type="submit" className="w-full gradient-maroon text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">Request Callback</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── FINAL CTA ─────────────── */
const FinalCTA = () => (
  <section className="section-padding gradient-maroon text-center">
    <div className="container-main">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Ready to Begin Your Leadership Journey?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Limited to 30 seats per batch. Applications for PGP-LPG 2026-27 are now open.</p>
        <button onClick={() => scrollTo("#admissions")} className="gradient-gold text-foreground px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
          Apply Now <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════ LANDING PAGE ═══════════════ */
const LandingPage = () => (
  <>
    <HeroSection />
    <StatsStrip />
    <AboutSection />
    <WhyIIDL />
    <ProgrammeSection />
    <CurriculumSection />
    <AdmissionsSection />
    <AlumniSection />
    <LeadCapture />
    <ContactSection />
    <FinalCTA />
  </>
);

export default LandingPage;
