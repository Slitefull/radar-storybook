import { DefaultTheme } from "styled-components";
import { Themes } from "@/constants/themes";
import { breakpoints } from "@/ui-kit/constants/breakpoints";
import { components } from "./components";


export const light: DefaultTheme = {
  name: Themes.light,
  breakpoints,
  components,
};
