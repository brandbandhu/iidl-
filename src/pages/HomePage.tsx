import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, MapPin, BookOpen, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, title: "Shape the Future of Indian Democracy", subtitle: "Become a trained, ethical, and responsible leader", cta: "Apply Now" },
  { image: hero2, title: "9-Month Intensive Leadership Programme", subtitle: "PGP in Leadership, Politics & Governance", cta: "Know More" },
  { image: hero3, title: "World-Class Campus & Learning Experience", subtitle: "15-acre Knowledge Excellence Centre near Mumbai", cta: "Explore Campus" },
];

const testimonials = [
  { name: "Manohar", batch: "Batch IV", text: "IIDL has been a turning point in my career and life. It moulded me into the professional that I am today and is the primary reason why I got the opportunity to work in parliament." },
  { name: "Satyavardhandas Bairagi", batch: "Batch VI", text: "RMP-IIDL is an institute where I discovered my personality in a more structured manner and improved my existing skills in Leadership, Politics & Governance." },
  { name: "Dharmesh Agrawal", batch: "Batch VII", text: "IIDL has played the paramount role in boosting my confidence and ensured that I am well trained to start my journey in Politics." },
  { name: "Prince Tiwari", batch: "Batch VI", text: "IIDL has been a transformative experience for me, offering a unique perspective on Indian policy making and politics." },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
              Indian Institute of Democratic Leadership
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="gradient-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programme"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors hidden md:flex">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors hidden md:flex">
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};

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

const WhyIIDL = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <SectionHeading
        subtitle="Why Choose Us"
        title="Why IIDL?"
        description="A unique blend of academic learning, field exposure, and political simulation"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: BookOpen, title: "Classroom Learning", desc: "Rigorous academic curriculum covering leadership, politics, governance, economics, and public policy taught by domain experts and practitioners." },
          { icon: MapPin, title: "Field Exposure", desc: "Real-world exposure through election campaigns, constituency visits, embassy tours, ministry visits, and grassroots community engagement." },
          { icon: Users, title: "Political Simulation", desc: "Model Parliament, Model G20, Model United Nations, and other simulations to develop practical political skills and strategic thinking." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group glass-card rounded-xl p-8 hover-lift cursor-default"
          >
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

const ProgrammePreview = () => (
  <section className="section-padding bg-ivory">
    <div className="container-main">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">Our Programme</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Post Graduate Programme in Leadership, Politics & Governance
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            PGP-LPG is a unique interdisciplinary course designed to close the gap between young talent and India's democratic political entity and governance. The programme produces trained, ethical and responsible leaders — "New Leaders for a New India."
          </p>
          <ul className="space-y-3 mb-8">
            {["9-month residential programme", "Expert faculty from diverse fields", "Election exposure & field visits", "Constituency profiling projects"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/programme" className="gradient-maroon text-primary-foreground px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Explore Programme <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img src={hero2} alt="Students in classroom" className="rounded-xl shadow-lg w-full" loading="lazy" />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-lg hidden md:block">
            <p className="font-heading text-3xl font-bold">197+</p>
            <p className="text-sm text-primary-foreground/80">Leaders Trained</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding gradient-maroon">
      <div className="container-main">
        <SectionHeading subtitle="Alumni Stories" title="What Our Alumni Say" light />
        <div className="max-w-3xl mx-auto relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-gold mx-auto mb-6" />
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-heading text-xl font-semibold text-primary-foreground">{testimonials[current].name}</p>
              <p className="text-gold text-sm">{testimonials[current].batch}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-gold w-6" : "bg-primary-foreground/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadCapture = () => {
  const [form, setForm] = useState({ name: "", phone: "", state: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you shortly.");
    setForm({ name: "", phone: "", state: "" });
  };

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading subtitle="Get In Touch" title="Interested in IIDL?" description="Fill in your details and our counsellor will reach out to you" />
          </div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <input
              type="text"
              placeholder="State"
              required
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <button type="submit" className="w-full gradient-maroon text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Request Callback
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <>
    <HeroCarousel />
    <StatsStrip />
    <WhyIIDL />
    <ProgrammePreview />
    <TestimonialsSection />
    <LeadCapture />
  </>
);

export default HomePage;
