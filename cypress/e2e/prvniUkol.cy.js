Cypress._.times(3, () => {
  describe('prvni ukol', () => {
    beforeEach(() => {
      cy.setCookie('__kwc_agreed', 'true')
      cy.visit('en/country/china/?botview=1')
    cy.setCookie('__kwc_agreed', 'true')
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
  it('checks h1, navbar, loading element, why kiwi banner, breadcrumbs', () => {
    cy.get('h1').should('have.text', 'Plane tickets to China')
    cy.log('h1 is Plane tickets to China')
    cy.get('[data-test="NavBar"]').should('be.visible')
    cy.log('navbar is visible')
    cy.get('[data-test="NavBar"]').should('be.visible')
    cy.log('search form is visible')
    cy.get('.Herostyled__SearchForm-sc-j7sblu-4').should('be.visible')
    cy.log('search button does not exist')
    cy.getByData("LandingSearchButton").should('not.exist')
    cy.log('why kiwi banner is visible')
    cy.getByData("WhyKiwiBanner").should('be.visible')
    cy.log('breadcrumbs are visible')
  })
  it('checks if sections and subsections are visible', () => {
    cy.log('section Popular Cities is visible')
    cy.getByData('CountryLandingPage').should('be.visible')
    cy.getByData('InterlinkingSection')
      .contains('h2', 'Explore airlines and airports')
      .should('be.visible')
    cy.log('checking h3 elements')
    cy.getByData('CountryLandingPage')
      .contains('h3', 'Airlines based in China')
      .should('be.visible')
    cy.getByData('CountryLandingPage')
      .contains('h3', 'Popular airlines flying to China')
      .should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Airports in China').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Airports near China').should('be.visible')
    cy.getByData('CountryLandingPage')
      .contains('h3', 'Popular airports in China')
      .should('be.visible')
    cy.log('checking h2 elements')
    cy.getByData('CountryLandingPage').contains('h2', 'Buses & trains').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h2', 'Explore airlines and airports').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h2', 'Cheapest month to fly to China').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h2', 'Discover China').should('be.visible')
    cy.log('covid restrictions section is visible')
    cy.getByData('CountryLandingPage')
      .contains('h2', 'China COVID-19 travel restrictions')
      .should('be.visible')
    cy.log('departure and return sections are visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Departure').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Return').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h2', 'Popular flights').should('be.visible')
    cy.getByData('CountryLandingPage')
      .contains('h3', 'Explore alternative flights to China')
      .should('be.visible')
    cy.getByData('CountryLandingPage')
      .contains('h3', 'Find popular flights from China')
      .should('be.visible')
    cy.log('cheap flights section is visible')
    cy.getByData('CountryLandingPage').contains('h2', 'Cheap flights').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Europe').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Asia').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'Africa').should('be.visible')
    cy.getByData('CountryLandingPage').contains('h3', 'North America').should('be.visible')
  })
  it('should verify the response of each airline URL', () => {
    const airlines = [
      { name: 'Ruili Airlines', url: 'https://www.kiwi.com/en/airline/dr/ruili-airlines/' },
      {
        name: 'China Eastern Airlines',
        url: 'https://www.kiwi.com/en/airline/mu/china-eastern-airlines/',
      },
      { name: 'Sichuan Airlines', url: 'https://www.kiwi.com/en/airline/3u/sichuan-airlines/' },
      { name: 'Lucky air', url: 'https://www.kiwi.com/en/airline/8l/lucky-air/' },
      { name: 'Urumqi Airlines', url: 'https://www.kiwi.com/en/airline/uq/urumqi-airlines/' },
      { name: 'China Airlines', url: 'https://www.kiwi.com/en/airline/ci/china-airlines/' },
      {
        name: 'China Express Airlines',
        url: 'https://www.kiwi.com/en/airline/g5/china-express-airlines/',
      },
      { name: 'Hainan Airlines', url: 'https://www.kiwi.com/en/airline/hu/hainan-airlines/' },
      { name: 'Loong Air', url: 'https://www.kiwi.com/en/airline/gj/loong-air/' },
      { name: 'China United', url: 'https://www.kiwi.com/en/airline/kn/china-united/' },
      {
        name: 'Genghis Khan Airlines',
        url: 'https://www.kiwi.com/en/airline/9d/genghis-khan-airlines/',
      },
      { name: 'Air Travel', url: 'https://www.kiwi.com/en/airline/a6/air-travel/' },
      {
        name: 'Colorful Guizhou Airlines',
        url: 'https://www.kiwi.com/en/airline/gy/colorful-guizhou-airlines/',
      },
      { name: 'Qingdao Airlines', url: 'https://www.kiwi.com/en/airline/qw/qingdao-airlines/' },
      { name: 'Grand China Air', url: 'https://www.kiwi.com/en/airline/cn/grand-china-air/' },
      { name: 'Shanghai Airlines', url: 'https://www.kiwi.com/en/airline/fm/shanghai-airlines/' },
      {
        name: 'China Southern Airlines',
        url: 'https://www.kiwi.com/en/airline/cz/china-southern-airlines/',
      },
      { name: 'Air Changan', url: 'https://www.kiwi.com/en/airline/9h/air-changan/' },
      { name: 'Tijan Airlines', url: 'https://www.kiwi.com/en/airline/gs/tianjin-airlines/' },
      { name: '9 Air', url: 'https://www.kiwi.com/en/airline/aq/9-air/' },
    ]
    cy.log('verify the response of each airline URL')
    cy.visit('/country/china/?botview=1')
    airlines.forEach(airline => {
      cy.get('[class*=TextLink__StyledTextLink]').contains(airline.name).click()
      cy.request('GET', airline.url).then(response => {
        expect(response.status).to.eq(200) // or 302
      })
      cy.go('back')
    })
  })
  it('All URL from section contains substring /en/airline/', () => {
    cy.log('Check URL form section contain /en/airline/')
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
