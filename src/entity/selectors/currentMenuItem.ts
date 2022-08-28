import { selector } from "recoil";
import { currentMenuItemState } from "../atoms/currentMenuItem";


type MenuElements = "monitoring" | "domains" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

const key = "menu/currentMenuItemSelector"

export const currentMenuItemSelector = selector<MenuElements | null>({
  key,
  get: ({ get }) => get(currentMenuItemState),
})
