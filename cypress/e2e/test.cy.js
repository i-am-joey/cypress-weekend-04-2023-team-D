describe('Verify airline URLs', () => {
  it('All string contains substring /en/airline/', () => {
    cy.visit('/country/china/?botview=1')
    cy.get('.LinksListstyled__UnorderedList-sc-1uds6px-0.kwatjS')
      .find('a')
      .then($links => {
        const hrefs = []
        $links.each((index, link) => {
          const href = link.href
          hrefs.push(href)
        })
        cy.writeFile('cypress/fixtures/hrefs.json', hrefs)
      })

    cy.fixture('hrefs').then(hrefs => {
      hrefs.forEach(href => {
        expect(href).to.contains('en/airline')
      })
    })
  })
})
