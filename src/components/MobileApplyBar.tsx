import { openApplyNowModal } from "@/lib/applyNow";

const MobileApplyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] lg:hidden gradient-maroon">
    <button
      onClick={openApplyNowModal}
      className="flex-1 rounded-lg py-2.5 text-center text-sm font-bold text-foreground gradient-gold"
    >
      Apply Now - PGP-LPG 2026-27
    </button>
  </div>
);

export default MobileApplyBar;
