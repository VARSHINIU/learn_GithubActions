export class LogoutPage{
    constructor(page,expect){
        this.page=page,
        this.expect=expect
        this.anyLogout="//*[text()='Logout']",
        this.sections="//button[@id='react-burger-menu-btn']",
        this.logoutBtn="//a[@id='logout_sidebar_link']"
    }
     async open(){
        await this.page.waitForLoadState("load");
        await this.page.goto("");
    }
    async nologout(){
        await this.expect(this.page.locator(this.anyLogout)).not.toBeVisible();
    }

    async logout(){
        await this.page.waitForSelector(this.sections,{state:"visible"});
        await this.page.locator(this.sections).click();
        await this.expect(this.page).toHaveURL(process.env.HOMEPAGE);

        await this.expect(this.page.locator(this.logoutBtn)).toBeVisible();
        await this.page.locator(this.logoutBtn).click();

        await this.expect(this.page).toHaveURL(process.env.BASE_URL);
    }
}