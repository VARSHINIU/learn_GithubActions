export class LoginPage {
    constructor(page, expect) {
        this.page = page,
            this.expect = expect,
            this.userinput = "//input[@id='user-name']",
            this.passwordinput = "//input[@id='password']",
            this.loginBtn = "//input[@id='login-button']",
            this.product = "//span[@class='title']",
            this.nouser = "//h3[normalize-space()='Epic sadface: Username is required']",
            this.nopass = "//h3[normalize-space()='Epic sadface: Password is required']",
            this.error = "//h3[contains(text(),'Epic sadface: Username and password do not match a')]"

    }

    async open() {
        await this.page.waitForLoadState("load");
        await this.page.goto("");
    }

    async URLandTITLEvalidation() {
        await this.expect(this.page).toHaveURL(process.env.BASE_URL);//url
        await this.expect(this.page).toHaveTitle(process.env.TITLE);//title
    }

    async LoginUIUXvalidation() {
        //login button
        const button = this.page.locator("//input[@id='login-button']");
        await this.expect(button).toHaveCSS("background-color", "rgb(61, 220, 145)");
        await this.expect(button).toHaveCSS("color", "rgb(19, 35, 34)");

        //heading
        const heading = await this.page.locator("//div[@class='login_logo']");
        await this.expect(heading).toHaveCSS("color", "rgb(19, 35, 34)");
        await this.expect(heading).toHaveCSS("font-size", "24px");
    }

    async LoginFunctionality(username, password, status) {
        await this.page.locator(this.userinput).fill(username);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginBtn).click();

        if (status) {
            await this.page.waitForSelector(this.product, { state: "visible" });
            await this.expect(this.page.locator(this.product)).toBeVisible();

        } else {
            if (!username) {
                await this.expect(this.page.locator(this.nouser)).toBeVisible();

            } else if (!password) {
                await this.expect(this.page.locator(this.nopass)).toBeVisible();
            } else {
                await this.expect(this.page.locator(this.error)).toBeVisible();
            }
        }

    }

    async validLogin() {
        await this.page.waitForLoadState("load");
        await this.page.goto("");
        await this.page.locator(this.userinput).fill(process.env.NAME);
        await this.page.locator(this.passwordinput).fill(process.env.PASSWORD);
        await this.page.locator(this.loginBtn).click();
    }

} 