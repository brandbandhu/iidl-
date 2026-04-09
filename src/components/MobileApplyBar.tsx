const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MobileApplyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden gradient-maroon p-3 flex items-center justify-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
    <button
      onClick={() => scrollTo("#admissions")}
      className="flex-1 text-center gradient-gold text-foreground py-2.5 rounded-lg text-sm font-bold"
    >
      Apply Now — PGP-LPG 2026-27
    </button>
  </div>
);

export default MobileApplyBar;
