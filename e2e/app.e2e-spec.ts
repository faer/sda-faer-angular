import { SdaFaerAngular4Page } from './app.po';

describe('sda-faer-angular4 App', () => {
  let page: SdaFaerAngular4Page;

  beforeEach(() => {
    page = new SdaFaerAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
