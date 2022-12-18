import styled, { createGlobalStyle, DefaultTheme } from 'styled-components/macro'
import { NEUTRAL_50, NEUTRAL_90, NEUTRAL_10 } from "@/ui-kit/constants/colors";


interface RowProps {
  display?: "flex" | "inline-flex" | "block";
  gap?: number;
  rowGap?: number;
  align?: "center" | "baseline" | "end";
  justify?: "flex-start" | "flex-end" | "space-between" | "center";
  width?: string;
  height?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  cursor?: "pointer" | "default" | "not-allowed";
  wrap?: "inherit" | "wrap";
}

interface ColumnProps {
  display?: "flex" | "inline-flex" | "block";
  gap?: number;
  rowGap?: number;
  align?: "center" | "baseline" | "end";
  justify?: "flex-start" | "flex-end" | "space-between" | "center";
  width?: string;
  height?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  cursor?: "pointer" | "default" | "not-allowed";
  wrap?: "inherit" | "wrap";
}

export default createGlobalStyle<{ theme: DefaultTheme }>` && {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    background: ${NEUTRAL_10};
  }

  body {
    font-family: 'FreightSans Pro', 'Menlo', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${NEUTRAL_50};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${NEUTRAL_90};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
}`

export const Row = styled.div<RowProps>` && {
  display: ${({ display = "flex" }) => display};
  flex-direction: row;
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = "0px" }) => margin};
  width: ${({ width = "auto" }) => width};
  height: ${({ height = "auto" }) => height};
  min-height: ${({ minHeight = "auto" }) => minHeight};
  align-items: ${({ align = "baseline" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: 0 ${({ gap = 40 }) => gap}px;
  row-gap: ${({ rowGap = 5 }) => rowGap}px;
  cursor: ${({ cursor }) => cursor};
  flex-wrap: ${({ wrap = "inherit" }) => wrap};
}`

export const Column = styled.div<ColumnProps>` && {
  display: ${({ display = "flex" }) => display};
  flex-direction: column;
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = "inherit" }) => margin};
  width: ${({ width = "auto" }) => width};
  height: ${({ height = "auto" }) => height};
  min-height: ${({ minHeight = "auto" }) => minHeight};
  align-items: ${({ align = "baseline" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: ${({ gap = 15 }) => gap}px 0;
  cursor: ${({ cursor }) => cursor};
  flex-wrap: ${({ wrap = "inherit" }) => wrap};
}`
