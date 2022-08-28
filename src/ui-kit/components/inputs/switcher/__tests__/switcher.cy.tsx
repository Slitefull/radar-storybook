import Switcher from "../switcher";


describe('<Switcher>', () => {
  it('Switcher component mounts', () => {
    cy.mount(<Switcher isChecked={false} onChange={() => null}/>)
  })
})
