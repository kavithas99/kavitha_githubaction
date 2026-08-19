exports.CreateAccount = class CreateAccount {
  constructor(page) {
    this.page = page;
    this.title = this.page.getByRole('radio', { name: 'Mr.' });
    this.txt_firstname = this.page.locator('#customer_firstname');
    this.txt_lastname = this.page.locator('#customer_lastname');
    this.txt_email = this.page.locator('#email');
    this.txt_password = this.page.locator('#passwd');
    this.days = this.page.locator('#days');
    this.months = this.page.locator('#months');
    this.years = this.page.locator('#years');
    this.registerButton = this.page.getByRole('button', { name: /Register/i });
  }

  async createaccountsubmit(firstname, lastname) {
    await this.title.check();
    await this.txt_firstname.fill(firstname);
    await this.txt_lastname.fill(lastname);
    //await this.txt_email.fill('testuser@example.com');
    await this.txt_password.fill('We1234!');
    await this.days.selectOption('4');
    await this.months.selectOption('7');
    await this.years.selectOption('2002');
    await this.registerButton.click();
  }
};