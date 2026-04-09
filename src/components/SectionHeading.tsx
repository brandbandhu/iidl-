import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    className="text-center mb-12 md:mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    {subtitle && (
      <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${light ? "text-gold-light" : "text-gold"}`}>
        {subtitle}
      </p>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="section-divider mb-4" />
    {description && (
      <p className={`max-w-2xl mx-auto text-base ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
