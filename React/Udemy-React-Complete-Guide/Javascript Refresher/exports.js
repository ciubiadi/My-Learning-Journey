//Exports & Imports

//person.js
let person = {
  name: "Theo",
};
// export default person;

//utility.js
export let clean = () => {
  console.log("test");
};
export let baseDate = 10;

//app.js
import person from "./person.js";
import prs from "./person.js";

//When we have export default in one file, we can import the export and name it as we wish
//When we have export a function, or a variable, we need to import it using {} and the actual name of the exported thing

import { baseDate } from "/utility.js";
import { clean } from "/utility.js";

//When we have export a function, or a variable we can rename it using the word as
import { baseDate as base } from ".utility.js";

//If we want to import everything we can use * and use them as bundled.data bundled.clean
import * as bundled from "./utility.js";
