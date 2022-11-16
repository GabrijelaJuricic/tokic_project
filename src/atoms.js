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
  default: [],
});

// === Coupon states === //

export const openCouponFieldState = atom({
  key: "openCouponFieldState",
  default: false,
});

export const totalAmountState = atom({
  key: "totalAmountState",
  default: 0,
});

export const couponInputValueState = atom({
  key: "couponInputValueState",
  default: "",
});

export const couponSuccessMessageState = atom({
  key: "couponSuccessMessageState",
  default: null,
});

export const couponErrorMessageState = atom({
  key: "couponErrorMessageState",
  default: null,
});

// === ===

export const buttonDisabledState = atom({
  key: "buttonDisabledState",
  default: true,
});
