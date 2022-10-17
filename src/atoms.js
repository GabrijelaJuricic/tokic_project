import { atom } from "recoil";

export const showModalState = atom({
  key: "showModalState",
  default: false,
});

export const pageState = atom({
  key: "pageState",
  default: 0,
});
