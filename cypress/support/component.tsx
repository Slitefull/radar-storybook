import { mount } from 'cypress/react';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "../../src/ui-kit/themes/light/light";
import './commands';


declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('mount', (component) => {
  const wrapped = (
    <RecoilRoot>
      <ThemeProvider theme={light}>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  )
  return mount(wrapped)
})
