import { atom } from "recoil";


type MenuElements = "monitoring" | "manage" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

const key = "menu/currentMenuItemState";

export const currentMenuItemState = atom<MenuElements | null>({
  key,
  default: null,
})
