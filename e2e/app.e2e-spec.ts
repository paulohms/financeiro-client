import { FinanceiroClientPage } from './app.po';

describe('financeiro-client App', () => {
  let page: FinanceiroClientPage;

  beforeEach(() => {
    page = new FinanceiroClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
