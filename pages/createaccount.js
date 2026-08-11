

exports.CreateAccount = class CreateAccount{

constructor(page){
    this.page=page;
    this.txt_tiltle=this.page.getByRole('radio', { name: 'Mr.' })
    this.txt_firstname=this.page.getByRole('textbox', { name: 'First name *' })
    this.txt_lastname=this.page.getByRole('textbox', { name: 'Last name *' })

}
   async createaccountsubmit(firtname,lastname){
      //await this.txt_tiltle.check();
    
      await this.txt_firstname.fill(firtname);
      await this.txt_lastname.click();
      await this.txt_lastname.fill(lastname);
      await this.page.getByRole('textbox', { name: 'Email *' }).click();
      await this.page.getByRole('textbox', { name: 'Password *' }).click();
      await this.page.getByRole('textbox', { name: 'Password *' }).fill('We1234!');
      await this.page.locator('#days').selectOption('4');
      await this.page.locator('#months').selectOption('7');
      await this.page.locator('#years').selectOption('2002');
      await this.page.getByRole('button', { name: 'Register ' }).click();
     // await expect(this.page.getByText('Your account has been created.')).toBeVisible();

}
}