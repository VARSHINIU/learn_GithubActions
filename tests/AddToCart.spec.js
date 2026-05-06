import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddtoCartPage } from "../Pages/AddtoCartPage";


test.describe("Addtocart Scenaario",()=>{
    let AddPOM;
    test.beforeEach(async({page})=>{
        const LoginPOM=new LoginPage(page,expect);
        await LoginPOM.validLogin();
        AddPOM=new AddtoCartPage(page,expect);
    })

    test("UI validation",async({page})=>{
        await AddPOM.UiValidation();
    })

    test("Addtocart button activation",async({page})=>{
        await AddPOM.button_activation();
    })

    test("Remove Visibility",async({page})=>{
        await AddPOM.verify_remove();
    });

    test("addtocart functionality",async({page})=>{
        await AddPOM.Addtocart_Functionality();
    })

    test("Remove Functionality",async({page})=>{
        await AddPOM.Addtocart_Functionality();
        await AddPOM.remove_Functioanlity();
    })

    test.only("Cart Badge Functionality",async({page})=>{
        await AddPOM.cartBadge_Functionality()
    })
})