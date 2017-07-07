import { SuntrustPage } from './app.po';

describe('suntrust App', function() {
  let page: SuntrustPage;

  beforeEach(() => {
    page = new SuntrustPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
