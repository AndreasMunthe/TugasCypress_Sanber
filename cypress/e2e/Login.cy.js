describe('Login Scenario', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    })

  it('Succes Login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
  })

  //Username and Password is wrong
  it('Failed Login', () => {
    cy.get('#user-name').type('0')
    cy.get('[data-test="password"]').type('0')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  //Locked Out User
  it('Failed Login Locked Out User', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  //Login with problem User
  it('Succes Login with problem User', () => {
    cy.get('#user-name').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
  })

  //Succes Logout
  it('Succes Logout', () => {
    cy.get('#user-name').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible')
  })

})