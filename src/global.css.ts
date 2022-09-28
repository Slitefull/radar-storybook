import styled, { createGlobalStyle, DefaultTheme } from 'styled-components'
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
  }

  body {
    font-family: 'FreightSans Pro', 'Menlo', sans-serif;
  }
  
  #root {
    display: flex;
  }
}`

export const BodyWrapper = styled.div` && {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  padding: 0 0 0 80px;
  background: #F5F5F5;
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
