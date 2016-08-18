describe('Home', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have an input', () => {
    expect(element(by.css('sd-home .home-form .home-input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', () => {
    expect(element(By.css('md-list')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', () => {
    element(by.css('sd-home .home-form .home-input input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-home .home-form .home-button')).click();

    expect(element(By.css('md-list')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });

});
