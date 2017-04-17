import { NgxDndTestPage } from './app.po';

describe('ngx-dnd-test App', () => {
  let page: NgxDndTestPage;

  beforeEach(() => {
    page = new NgxDndTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
