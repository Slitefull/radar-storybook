import styled, { createGlobalStyle, DefaultTheme } from 'styled-components'


export default createGlobalStyle<{ theme: DefaultTheme }>` && {
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
}`
