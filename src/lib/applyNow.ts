const APPLY_NOW_EVENT = "iidl:open-apply-now";

export const openApplyNowModal = () => {
  window.dispatchEvent(new Event(APPLY_NOW_EVENT));
};

export const onApplyNowModalOpen = (handler: () => void) => {
  window.addEventListener(APPLY_NOW_EVENT, handler);
  return () => window.removeEventListener(APPLY_NOW_EVENT, handler);
};
