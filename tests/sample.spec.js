import {test} from "@playwright/test"

test("Github CICD check", async({page})=>{
    await page.goto(process.env.PROD_URL);
    await page.locator("//input[@id='username']").fill("student");
    await page.locator("//input[@id='password']").fill("Password123");
    await page.locator("//button[@id='submit']").click();
})