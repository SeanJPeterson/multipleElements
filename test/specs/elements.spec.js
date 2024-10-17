import { expect } from '@wdio/globals'
import elementsPage from '../pageobjects/elements.page.js'

describe('Bonus elements test', () => {
    it('Add 4 buttons', async () => {
        //opens to add/remove elemets page
        await elementsPage.open();
        //clicks on the add element button to add elements 4 times using a for loop
        let index = 0
        for (index = 0; index < 4; index++) {
            await elementsPage.addElement.click();
            };
    });
    it('Verify that 4 buttons exist', async () => {
        //checks the array size of the elements
        await expect(elementsPage.buttonElements).toBeElementsArrayOfSize(4);
    });
    it('Verify that array is greater then 1', async () => {
        //checks the array size of the elements
        await expect(elementsPage.buttonElements).toBeElementsArrayOfSize({gte: 1});
    });
    //deletes the four delete buttons using a for loop
    it('Delete 4 buttons', async () => {
        let pindex = 0
        for (pindex = 0; pindex < 4; pindex++) {
            await elementsPage.deleteButton.click();
            };
    });
    it('Verify that no buttons exist', async () => {
        //checks the array size of the elements
        await expect(elementsPage.buttonElements).toBeElementsArrayOfSize(0);
    });
});