import { motion } from "framer-motion";
import { BookOpen, MapPin, Briefcase, GraduationCap, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import hero2 from "@/assets/hero-2.jpg";
import hero1 from "@/assets/hero-1.jpg";

const ProgrammePage = () => (
  <>
    <Breadcrumb items={[{ label: "Programme (PGP-LPG)" }]} />

    {/* Hero */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero1} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>
      <div className="relative z-10 container-main px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Programme</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Post Graduate Programme in Leadership, Politics & Governance
          </h1>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            A unique interdisciplinary course designed to close the gap between young talent and India's democratic political entity and governance.
          </p>
          <Link to="/admissions" className="gradient-gold text-foreground px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Key Features */}
    <section className="section-padding bg-background">
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
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-7 hover-lift"
            >
              <div className="w-12 h-12 rounded-lg gradient-maroon flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Who Can Attend */}
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img src={hero2} alt="Students" className="rounded-xl shadow-lg w-full" loading="lazy" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">Eligibility</p>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Who Can Attend?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The programme is targeted at students and young professionals who wish to make a career in the field of politics, governance, public affairs and leadership.
            </p>
            <ul className="space-y-4">
              {[
                "Graduates from any discipline (21-30 years)",
                "Aspiring political leaders and public servants",
                "Young professionals interested in governance",
                "Social workers and community organizers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center mt-0.5 shrink-0">
                    <span className="text-foreground text-xs">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-maroon text-center">
      <div className="container-main">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Begin Your Leadership Journey?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Limited to 30 seats per batch. Applications for 2026-27 are now open.</p>
        <Link to="/admissions" className="gradient-gold text-foreground px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
          Apply Now <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </>
);

export default ProgrammePage;
