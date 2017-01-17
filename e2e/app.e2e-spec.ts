import { JasminePracticePage } from './app.po';

describe('jasmine-practice App', function() {
  let page: JasminePracticePage;

  beforeEach(() => {
    page = new JasminePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
