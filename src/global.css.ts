import styled, { createGlobalStyle, DefaultTheme } from 'styled-components/macro'
import { DARK_GREY, DARK_LAVA, SNOW } from "@/ui-kit/constants/colors";


interface RowProps {
  gap?: number;
  align?: "center" | "baseline" | "end";
  justify?: "flex-start" | "space-between" | "center";
  width?: string;
  margin?: string;
  padding?: string;
}

interface ColumnProps {
  gap?: number;
  align?: "center" | "baseline" | "end";
  justify?: "flex-start" | "space-between" | "center";
  width?: string;
  margin?: string;
  padding?: string;
}

export default createGlobalStyle<{ theme: DefaultTheme }>` && {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    background: ${SNOW};
  }

  body {
    font-family: 'FreightSans Pro', 'Menlo', sans-serif;
  }

  #root {
    display: flex;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${DARK_GREY};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${DARK_LAVA};
  }
}`

export const BodyWrapper = styled.div` && {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  padding: 0 0 0 80px;
}`

export const Row = styled.div<RowProps>` && {
  display: flex;
  flex-direction: row;
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = "0px" }) => margin};
  width: ${({ width = "auto" }) => width};
  align-items: ${({ align = "baseline" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: 0 ${({ gap = 40 }) => gap}px;
}`

export const Column = styled.div<ColumnProps>` && {
  display: flex;
  flex-direction: column;
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = "inherit" }) => margin};
  width: ${({ width = "auto" }) => width};
  align-items: ${({ align = "baseline" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: ${({ gap = 15 }) => gap}px 0;
}`
