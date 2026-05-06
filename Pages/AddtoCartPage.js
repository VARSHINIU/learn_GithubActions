import { error } from "node:console"

export class AddtoCartPage{
    constructor(page,expect){
        this.page=page,
        this.expect=expect
        this.addtocartBtn="//button[@id='add-to-cart-sauce-labs-backpack']"
        this.removeBtn="//button[@id='remove-sauce-labs-backpack']"
        this.firstItem="//div[normalize-space()='Sauce Labs Backpack']"
        this.cart="//a[@class='shopping_cart_link']"
        this.cartitems='//div[@data-test="inventory-item-name"]',
        this.secondaddtocart="//button[@id='add-to-cart-sauce-labs-bike-light']"
        this.cartbadge="//span[@class='shopping_cart_badge']"
        
    }

    async UiValidation(){
        const button=await this.page.locator(this.addtocartBtn);
        await this.expect(button).toHaveCSS("background-color","rgb(255, 255, 255)");
        await this.expect(button).toHaveCSS("color","rgb(19, 35, 34)");
        await this.expect(button).toHaveText("Add to cart");
    }

    async button_activation(){
        await this.expect(this.page.locator(this.addtocartBtn)).toBeEnabled();
    }

    async verify_remove(){
        await this.page.locator(this.addtocartBtn).click();
        await this.expect(this.page.locator(this.removeBtn)).toBeVisible();

    }

    async Addtocart_Functionality(){
        const itemname=await this.page.locator(this.firstItem).textContent();
        await this.page.locator(this.addtocartBtn).click();
        await this.page.locator(this.cart).click();
        let found=false;
        const cartitemsnames=await this.page.locator(this.cartitems);
        const count=await cartitemsnames.count();
        let value;
        for(let i=0;i<count;i++){
            value=await cartitemsnames.nth(i).textContent();
            if(value=="Sauce Labs Backpack"){
                found=true;
            }
        }
        if(!found){
            throw new error(value,"is not in cart page");
        }

    }

    async remove_Functioanlity(){
        await this.page.locator(this.removeBtn).click();
        const cartitemsnames=await this.page.locator(this.cartitems);
        const count=await cartitemsnames.count();
        let found=false;
        for(let i=0;i<count;i++){
            value=await cartitemsnames.nth(i).textContent();
            if(value=="Sauce Labs Backpack"){
                found=true;
            }
        }
        if(found){
            throw new error(value,"is in cart page,after removing");
        }
    }

    async cartBadge_Functionality(){
        //initial stage
        await this.expect(this.page.locator(this.cartbadge)).not.toBeVisible();

        //add one item
        await this.page.locator(this.addtocartBtn).click();
        await this.expect(this.page.locator(this.cartbadge)).toBeVisible();
        const cartbadgecount=await this.page.locator(this.cartbadge).textContent();
        if(!(cartbadgecount=="1")){
            throw new error("Cart badge count is not working")
        }

        //second item cart
        await this.page.locator(this.secondaddtocart).click();
        const cartbadgecount2=await this.page.locator(this.cartbadge).textContent();
        if(!(cartbadgecount2=="2")){
            throw new error("Cart badge count is not increased as expected");
        }
    }

}