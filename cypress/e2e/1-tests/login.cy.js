it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.login(
      Cypress.env('USER_EMAIL'),
      Cypress.env('USER_PASSWORD'),
      { cacheSession: false }
    )
    cy.wait('@getNotes')
  })
  it('successfully logs in 2 ', () => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.login().visit('/login')
    cy.wait('@getNotes')
  })