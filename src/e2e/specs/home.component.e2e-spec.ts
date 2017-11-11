import { browser, by, element } from 'protractor';

describe('Home', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have an input', async () => {
    const present = await element(by.css('sd-home .home-form .home-input')).isPresent();
    expect(present).toEqual(true);
  });

  it('should have a list of computer scientists', async () => {
    const text = await element(by.css('mat-list')).getText();
    expect(text)
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', async () => {
    element(by.css('sd-home .home-form .home-input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-home .home-form .home-button')).click();

    const text = await element(by.css('mat-list')).getText();
    expect(text)
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });

});
