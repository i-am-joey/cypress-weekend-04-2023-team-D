describe('prvni uloha', () => {
  beforeEach(() => {
    cy.visit(' https://www.kiwi.com/en/country/china/?botview=1')
  })

  it('Checks title, meta description, and canonical URL', () => {
    cy.log('Check title')
    cy.title().should('eq', 'Cheap flights to China | Kiwi.com')

    cy.log('Check meta description')
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.',
    )

    cy.log('Check canonical URL')
    cy.get('head link[rel="canonical"]').should(
      'have.attr',
      'href',
      'https://www.kiwi.com/en/country/china/',
    )

    cy.log('Check Footer section')
  })

  it('checks h1, navbar, loading element, why kiwi banner, breadcrumbs', () => {
    cy.get('h1').should('have.text', 'Plane tickets to China')
    cy.log('h1 is Plane tickets to China')
    cy.get('[data-test="NavBar"]').should('be.visible')
    cy.log('navbar is visible')
    cy.get('.Herostyled__SearchForm-sc-j7sblu-4').should('be.visible') //  TODO
    cy.log('search form is visible')
    cy.getByData('LandingSearchButton').should('not.exist')
    cy.log('search button does not exist')
    cy.getByData('WhyKiwiBanner').should('be.visible')
    cy.log('why kiwi banner is visible')
    cy.get('[class="Breadcrumbs__StyledBreadcrumbs-sc-v7d29h-0 hGAMLk"]') // TODO
    cy.log('breadcrumbs are visible')
  })
  it('checks sections Popular Cities and Explore airlines and airports', () => {
    cy.getByData('CountryLandingPage').should('be.visible')
    cy.log('section Popular Cities is visible')
    cy.get('[data-test="InterlinkingSectionResult"]').first().should('be.visible')
  })
  it('checks button "Search flights, trains & buses" is visible', () => {
    cy.log('button "Search flights, trains & buses" is visible')
    cy.getByData('StaticFooterMap').should('be.visible')
  })
  it('checks footer is visible', () => {
    cy.log('section Footer is visible')
    cy.get('[class*="Footerstyled__Wrapper"]').should('be.visible')
  })
})
