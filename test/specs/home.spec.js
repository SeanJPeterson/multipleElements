import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'

describe.skip('My home page', () => {
    it('should verify list items', async () => {
        //opens to home page
        await homePage.open();
        //checks the array size of the elements
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});
    });
   });