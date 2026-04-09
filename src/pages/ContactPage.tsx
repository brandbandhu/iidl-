import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading subtitle="Get In Touch" title="Contact Us" description="We'd love to hear from you. Reach out with any questions about IIDL or the PGP-LPG programme." />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", lines: ["Rambhau Mhalgi Prabodhini,", "Uttan, Bhayander (W),", "Thane, Maharashtra - 401106"] },
                { icon: Phone, title: "Phone", lines: ["+91 72080 70878"] },
                { icon: Mail, title: "Email", lines: ["iidl@rmponweb.org", "info@iidl.org.in"] },
                { icon: Clock, title: "Office Hours", lines: ["Mon - Sat: 10:00 AM - 6:00 PM"] },
              ].map(({ icon: Icon, title, lines }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg gradient-maroon flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm mb-1">{title}</h3>
                    {lines.map((line, li) => (
                      <p key={li} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="glass-card rounded-xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been sent. We'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-semibold text-sm hover:underline">
                    Send another message
                  </button>
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

          {/* Map */}
          <motion.div
            className="mt-12 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.123!2d72.8!3d19.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIDL Location"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
