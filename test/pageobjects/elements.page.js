import { $$ } from '@wdio/globals'
import Page from './page.js';
class elementsPage extends Page {
 get buttonElements() {
    //The two $ allow for multiple selections of elements
 return $$(`#elements [onclick='deleteElement\(\)']`);
 }
 //selects the delete button
 get deleteButton() {
   return $('div#elements > button:nth-of-type(1)')
 }
 //gets the add element button
 get addElement() {
    return $('div#content > div > button')
 }
open() {
 return super.open('add_remove_elements/');
 }
}
export default new elementsPage();