exports.LoginPage= class LoginPage{

    constructor(page){
        this.page=page
        this.email_textbox=page.locator('#email_create')
        this.createaccount_button=page.getByRole('button',{name:' Create an account'})

    }

    async clickcreateaccountlink(uemail)
    {
        await this.page.goto('https://automationpractice.techwithjatin.com/login?back=my-account');
        await this.email_textbox.fill(uemail)
        await this.createaccount_button.click()

    }
}