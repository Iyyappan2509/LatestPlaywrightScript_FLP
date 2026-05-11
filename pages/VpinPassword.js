class VpinPassword{

    constructor(page){
        this.page=page;
        this.pintextBox = this.page.getByRole('textbox', { name: 'PIN' });
        this.clicking = this.page.getByRole('button', { name: 'Validate and Proceed' });
    }

    async enterPinValue(pinValue){
        await this.pintextBox.fill(pinValue);
    }

    async clickValidationButton(){
        await this.clicking.click();
    }


}

export default VpinPassword;