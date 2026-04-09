import { motion } from "framer-motion";
import { Award, Users, Building2, BookOpen, Target, Globe } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import hero3 from "@/assets/hero-3.jpg";

const timeline = [
  { year: "1982", title: "RMP Founded", desc: "Rambhau Mhalgi Prabodhini established as a training and research academy." },
  { year: "2014", title: "IIDL Conceived", desc: "Vision for a dedicated institute for democratic leadership training." },
  { year: "2017", title: "First Batch", desc: "PGP-LPG programme launched with the inaugural batch of students." },
  { year: "2024", title: "7+ Batches", desc: "197+ alumni from 22+ states contributing to nation-building." },
];

const leaders = [
  { name: "Advisory Council", role: "Distinguished leaders from politics, academia, and public policy guide the institute's direction." },
];

const AboutPage = () => (
  <>
    <Breadcrumb items={[{ label: "About IIDL" }]} />

    {/* Hero */}
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">About Us</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Indian Institute of Democratic Leadership
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indian Institute of Democratic Leadership (IIDL), an initiative of Rambhau Mhalgi Prabodhini, is designed to produce trained, ethical, and responsible leaders. In short, "New Leaders for a New India."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The objective of IIDL is to provide a deep insight into the socio-political ground reality of India through its programmes, to inculcate and enhance leadership values and capacities, and to equip participants with the necessary skill-sets for having a career in politics, public affairs, voluntary organisations and allied areas.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: "197+ Alumni" },
                { icon: Globe, label: "22+ States" },
                { icon: Award, label: "UN Recognised" },
              ].map(({ icon: Icon, label }) => (
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
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading subtitle="Our Journey" title="Institutional Legacy" />
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-maroon flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  {item.year}
                </div>
                {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* RMP Section */}
    <section className="section-padding gradient-maroon">
      <div className="container-main text-center">
        <SectionHeading subtitle="Parent Organisation" title="About Rambhau Mhalgi Prabodhini" light />
        <p className="max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed mb-8">
          Established in 1982, Rambhau Mhalgi Prabodhini (RMP) is a unique Training and Research Academy, primarily aimed at enhancing the capabilities of voluntary activists and elected representatives of the people. RMP has an excellent state-of-the-art training facility spread over 15 acres of land on the outskirts of Mumbai, known as Knowledge Excellence Centre (KEC). RMP is recognised by the United Nations as a Special Consultative NGO.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { icon: Building2, label: "15-Acre Campus" },
            { icon: Target, label: "UN Recognised NGO" },
            { icon: BookOpen, label: "Est. 1982" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="text-center p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="text-sm font-semibold text-primary-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
