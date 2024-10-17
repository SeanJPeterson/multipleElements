import { $$ } from '@wdio/globals'
import Page from './page.js';
class homePage extends Page {
 get listExamples() {
    //The two $ allow for multiple selections of elements
 return $$('ul li');
 }
open() {
 return super.open('');
 }
}
export default new homePage();