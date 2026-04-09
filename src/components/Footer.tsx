import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Footer = () => (
  <footer className="gradient-maroon text-primary-foreground">
    <div className="container-main section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="IIDL" className="h-12 w-12 object-contain bg-primary-foreground/10 rounded-lg p-1" />
            <div>
              <p className="font-heading text-lg font-bold">IIDL</p>
              <p className="text-xs text-primary-foreground/70">Indian Institute of Democratic Leadership</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            An initiative of Rambhau Mhalgi Prabodhini, producing trained, ethical, and responsible leaders — "New Leaders for a New India."
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { icon: Facebook, href: "https://www.facebook.com/iidlpgp" },
              { icon: Twitter, href: "https://x.com/iidlpgp" },
              { icon: Linkedin, href: "https://www.linkedin.com/organization/13306292/" },
              { icon: Instagram, href: "https://www.instagram.com/iidlpgp/" },
              { icon: Youtube, href: "https://www.youtube.com/channel/UCjufvQPxvaXWWshm8vJUJzQ" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
          <div className="w-10 h-0.5 bg-gold mb-4" />
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "#hero" },
              { label: "About Us", href: "#about" },
              { label: "Programme", href: "#programme" },
              { label: "Admissions", href: "#admissions" },
              { label: "Alumni", href: "#alumni" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.href}>
                <button onClick={() => scrollTo(link.href)} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Programme</h3>
          <div className="w-10 h-0.5 bg-gold mb-4" />
          <ul className="space-y-2.5">
            {["PGP-LPG Overview", "Curriculum", "Daily Schedule", "FAQs"].map((item) => (
              <li key={item}>
                <button onClick={() => scrollTo("#programme")} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Contact Us</h3>
          <div className="w-10 h-0.5 bg-gold mb-4" />
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              Rambhau Mhalgi Prabodhini, Uttan, Bhayander (W), Thane, Maharashtra - 401106
            </li>
            <li>
              <a href="tel:+917208070878" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                +91 72080 70878
              </a>
            </li>
            <li>
              <a href="mailto:iidl@rmponweb.org" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                iidl@rmponweb.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Indian Institute of Democratic Leadership. All rights reserved.</p>
        <p>An initiative of Rambhau Mhalgi Prabodhini</p>
      </div>
    </div>
  </footer>
);

export default Footer;
