import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import loginData from "../Datas/loginData.json";

test.describe("Login scenario",()=>{
    test.skip("URL and Title validation",async({page})=>{
        const LoginOBJ=new LoginPage(page,expect);
        await LoginOBJ.open();
        await LoginOBJ.URLandTITLEvalidation();
    
    })

    test.skip("UI/UX validation",async({page})=>{
        const LoginOBJ=new LoginPage(page,expect);
        await  LoginOBJ.open();
        await LoginOBJ.LoginUIUXvalidation();
    })

    loginData.forEach((data)=>{
        test(`Login Functionality with ${data.username},${data.password} `,async({page})=>{
         const LoginOBJ=new LoginPage(page,expect);
         await LoginOBJ.open();
         await LoginOBJ.LoginFunctionality(data.username,data.password,data.status);
    })
    })
    

})