import expectedHreflangs from '../fixtures/hreflangs.json'

Cypress._.times(3, () => {
  describe('druha uloha', () => {
    const initialUrl = `${Cypress.config(
      'baseUrl',
    )}mx/cheap-flights/london-united-kingdom/istanbul-turkey/`
    beforeEach(() => {
      cy.setCookie('__kwc_agreed', 'true')
      cy.visit(initialUrl)
    })

    it('Checks the language from URL is not supported', () => {
      cy.log('Check if the URL has been redirected')
      cy.url().should('not.eq', initialUrl)
      cy.log('Check if the language of the page has changed')
      cy.document().then(doc => {
        const lang = doc.documentElement.getAttribute('lang')
        expect(lang).to.not.equal('mx')
        expect(lang).to.equal('es')
      })
    })
    it('Checks the hreflangs', () => {
      cy.log('Compare extracted hreflangs with actual hreflangs')
      cy.get('link[rel="alternate"]').then($hreflangs => {
        const hreflangs = Array.from($hreflangs).map(link => link.getAttribute('hreflang'))
        expect(hreflangs).to.have.members(expectedHreflangs)
      })
    })
  })
})
