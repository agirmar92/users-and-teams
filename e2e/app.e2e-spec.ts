import { UsersAndTeamsPage } from './app.po';

describe('users-and-teams App', () => {
  let page: UsersAndTeamsPage;

  beforeEach(() => {
    page = new UsersAndTeamsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
