import Checkbox from "../checkbox";


describe('<Checkbox>', () => {
  it('Checkbox component mounts', () => {
    cy.mount(<Checkbox isChecked={true} />)
  })
})
