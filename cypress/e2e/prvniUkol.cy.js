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

    cy.visit('/country/china/?botview=1')
    airlines.forEach(airline => {
      cy.get('[class*=TextLink__StyledTextLink]').contains(airline.name).click()
      cy.request('GET', airline.url).then(response => {
        expect(response.status).to.eq(200) // or 302
      })
      cy.go('back')
    })
  })
})
