import Input from "../text";


describe('<TextInput>', () => {
  it('TextInput component mounts', () => {
    cy.mount(<Input onChange={() => null} type={"text"}/>)
  })
})
