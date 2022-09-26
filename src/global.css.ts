import styled, { createGlobalStyle, DefaultTheme } from 'styled-components/macro'
import { DARK_GREY, DARK_LAVA, SNOW } from "@/ui-kit/constants/colors";
import fonts from './ui-kit/fonts/fonts';

interface RowProps {
  gap?: number;
  align?: "center" | "baseline";
}

interface ColumnProps {
  gap?: number;
  align?: "center" | "baseline";
  justify?: "flex-start" | "space-between";
}

export default createGlobalStyle<{ theme: DefaultTheme }>` && {
  ${fonts};
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
  align-items: ${({ align = "baseline" }) => align};
  gap: 0 ${({ gap = 40 }) => gap}px;
}`

export const Column = styled.div<ColumnProps>` && {
  display: flex;
  flex-direction: column;
  align-items: ${({ align = "baseline" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: ${({ gap = 15 }) => gap}px 0;
}`
