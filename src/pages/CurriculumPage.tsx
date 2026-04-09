import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const CurriculumPage = () => (
  <>
    <Breadcrumb items={[{ label: "Programme", path: "/programme" }, { label: "Curriculum" }]} />

    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading subtitle="Course Structure" title="Curriculum Overview" description="A comprehensive 9-month curriculum blending theory with practice" />

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { title: "Semester 1 — Foundation", subjects: semester1 },
            { title: "Semester 2 — Advanced & Applied", subjects: semester2 },
          ].map((sem, si) => (
            <motion.div
              key={sem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.15 }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full gradient-maroon text-primary-foreground flex items-center justify-center text-sm font-bold">{si + 1}</span>
                {sem.title}
              </h3>
              <Accordion type="single" collapsible className="glass-card rounded-xl overflow-hidden">
                {sem.subjects.map((sub, i) => (
                  <AccordionItem key={i} value={`${si}-${i}`} className="border-border">
                    <AccordionTrigger className="px-6 py-4 text-foreground font-medium text-sm hover:text-primary">
                      {sub.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground text-sm">
                      {sub.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CurriculumPage;
