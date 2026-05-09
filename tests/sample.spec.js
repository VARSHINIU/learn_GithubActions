import {test,expect} from "@playwright/test"

test("Github CICD check", async({page})=>{
    console.log(process.env.PROD_URL)
    await page.goto(process.env.PROD_URL);
    await page.locator("//input[@id='username']").fill("student");
    await page.locator("//input[@id='password']").fill("Password123");
    await page.locator("//button[@id='submit']").click();
    await expect(page.locator("//*[text()='Logged In Suuccessfully']")).toBeVisible();
})