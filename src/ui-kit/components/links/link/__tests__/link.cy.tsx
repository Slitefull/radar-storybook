import Link from "../link";


describe('<Link>', () => {
  it('Link component mounts', () => {
    cy.mount(<Link redirectTo={"/"}>Link</Link>)
  })
})
