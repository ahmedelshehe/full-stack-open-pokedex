describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page has the right content', function() {
    cy.get('a').eq(3).click()
    cy.contains('charmander')
    cy.contains('solar power')
  })

})