import { motion } from "framer-motion";
import { Quote, Briefcase, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";

const alumni = [
  { name: "Manohar", batch: "Batch IV", text: "IIDL has been a turning point in my career and life. It moulded me into the professional that I am today and is the primary reason why I got the opportunity to work in parliament. The profound impact of IIDL resonates in the opportunities it provided, ultimately leading me to serve as a Research Associate at the Lok Sabha Secretariat.", outcome: "Research Associate, Lok Sabha Secretariat" },
  { name: "Satyavardhandas Bairagi", batch: "Batch VI", text: "RMP-IIDL is an institute where I discovered my personality in a more structured manner and improved my existing skills in Leadership, Politics & Governance.", outcome: "Political Researcher" },
  { name: "Dharmesh Agrawal", batch: "Batch VII", text: "With no political background, IIDL has played the paramount role in boosting my confidence. I learned that politics is not only about leaders and glamour — there are lots of opportunities to excel as a Political Strategist, Advisor, War Room Manager, and more.", outcome: "Political Strategist" },
  { name: "Prince Tiwari", batch: "Batch VI", text: "IIDL has been a transformative experience, offering a unique perspective on Indian policy making and politics. The outdoor visits to embassies, ministries, and commissions provided unparalleled insights.", outcome: "Public Policy Analyst" },
  { name: "Shankar Ravi", batch: "Batch VII", text: "IIDL gives you a platform to connect with who's who of our country in the domain of politics. It's like a buffet system — you can select your area of interest and you'll be handholded in that domain.", outcome: "Political Consultant" },
  { name: "Nitesh Kumar Tripati", batch: "Batch VII", text: "My time at RMP as part of IIDL was an enriching experience. The highlight was the Constituency Profiling and Vision Document project in Shahapur Assembly Constituency.", outcome: "Constituency Researcher" },
];

const stateData = [
  "Maharashtra", "Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh",
  "Bihar", "Jharkhand", "Karnataka", "Tamil Nadu", "Assam",
  "West Bengal", "Odisha", "Chhattisgarh", "Haryana", "Uttarakhand",
  "Delhi", "Telangana", "Andhra Pradesh", "Kerala", "Punjab",
  "Jammu & Kashmir", "Goa",
];

const AlumniPage = () => (
  <>
    <Breadcrumb items={[{ label: "Alumni" }]} />

    {/* Alumni Overview */}
    <section className="section-padding gradient-maroon">
      <div className="container-main text-center">
        <SectionHeading subtitle="Our Alumni" title="Leaders Shaping India's Future" light description="197+ alumni from 22+ states are contributing to nation-building across politics, governance, media, and public affairs." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { num: "197+", label: "Alumni" },
            { num: "22+", label: "States" },
            { num: "7+", label: "Batches" },
            { num: "100%", label: "Placement Support" },
          ].map(({ num, label }) => (
            <div key={label} className="p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <p className="font-heading text-2xl font-bold text-gold">{num}</p>
              <p className="text-xs text-primary-foreground/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* States Grid */}
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <SectionHeading subtitle="Pan-India Reach" title="Alumni Across 22+ States" />
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {stateData.map((state, i) => (
            <motion.span
              key={state}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-1.5 px-4 py-2 glass-card rounded-full text-sm text-foreground"
            >
              <MapPin className="w-3 h-3 text-primary" />
              {state}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* Alumni Stories */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading subtitle="Success Stories" title="Alumni Testimonials" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, i) => (
            <motion.div
              key={alum.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                "{alum.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{alum.name}</p>
                <p className="text-xs text-gold">{alum.batch}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                  <Briefcase className="w-3 h-3" />
                  {alum.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Career Outcomes */}
    <section className="section-padding gradient-maroon">
      <div className="container-main">
        <SectionHeading subtitle="Career Outcomes" title="Where Our Alumni Work" light />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            "Parliament & Legislature",
            "Political Parties",
            "Public Policy Think Tanks",
            "Government & Bureaucracy",
            "Media & Journalism",
            "NGOs & Civil Society",
            "Election Management",
            "Political Consulting",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10"
            >
              <p className="text-sm text-primary-foreground font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AlumniPage;
