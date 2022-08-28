import Button from "../button";


describe('<Button>', () => {
  it('Button component mounts', () => {
    cy.mount(<Button>Button</Button>)
  })
})
