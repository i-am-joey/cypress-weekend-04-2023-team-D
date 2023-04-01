describe('prvni ukol', () => {
  beforeEach(() => {
    cy.visit(' /country/china/?botview=1')
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
  })
})
