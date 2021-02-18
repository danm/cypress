import { isBoolean } from 'lodash'

describe('Large 3rd party library with tree-shaking', () => {
  it('successfully imports isBoolean from lodash', () => {
    cy.wrap(isBoolean(true)).should('equal', true)
  })
})
