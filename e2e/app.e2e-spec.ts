import { EnvMonitorFrontPage } from './app.po';

describe('env-monitor-front App', () => {
  let page: EnvMonitorFrontPage;

  beforeEach(() => {
    page = new EnvMonitorFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
