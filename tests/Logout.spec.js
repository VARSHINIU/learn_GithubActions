import {test,expect} from "@playwright/test";
import { LogoutPage } from "../Pages/LogoutPage";
import { LoginPage } from "../pages/loginPage";

test.describe("Logout Scenario",()=>{
    test("No logout in Login Page",async({page})=>{
        const LogoutPOM=new LogoutPage(page,expect);
        await LogoutPOM.open();
        await LogoutPOM.nologout();
    })

    test("Logout Functionality",async({page})=>{
        const LoginPOM=new LoginPage(page,expect);
        await LoginPOM.validLogin();

        //logout
        const LogoutPOM =new LogoutPage(page,expect);
        await LogoutPOM.logout();


    })

})