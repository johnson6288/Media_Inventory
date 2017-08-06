import { Inventory1Page } from './app.po';

describe('inventory1 App', () => {
  let page: Inventory1Page;

  beforeEach(() => {
    page = new Inventory1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
