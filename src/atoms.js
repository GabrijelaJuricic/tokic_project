import { atom } from "recoil";

export const showModalState = atom({
  key: "showModalState",
  default: false,
});

export const pageState = atom({
  key: "pageState",
  default: 0,
});

export const brandItemState = atom({
  key: "brandItemState",
  default: "",
});

export const selectedServicesState = atom({
  key: "selectedServicesState",
  default: [{ selectedItems: "" }],
});

export const openCouponFieldState = atom({
  key: "openCouponFieldState",
  default: false,
});
