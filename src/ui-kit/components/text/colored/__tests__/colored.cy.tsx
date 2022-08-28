import ColoredText from "../colored";


describe('<ColoredText>', () => {
  it('ColoredText component mounts', () => {
    cy.mount(<ColoredText>ColoredText</ColoredText>)
  })
})
