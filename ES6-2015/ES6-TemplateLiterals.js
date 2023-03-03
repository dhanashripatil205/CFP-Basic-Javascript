//3]Template literals / Template Strings->

//3.1 String Concatination

//ES5 string concatination is ES5

console.log("My name is Kavya."+  "My age is 26.")

//ES6 string concatination in ES6 using template literals.

console.log(`My name is Shree. My age is 26.`);//space is counted.

//################################################

//3.2 Insert the variables in string using Template Literals.

//ES5 Normal string concatination.

let firstname = "Dhanu";
let lastname = "patil";
console.log("My name is "+ firstname + "."+ "My last name is " + lastname + ".")

//ES6 using template literals insert the variable value.

let firstname1 = "Dhana";
let lastname2 = "Raul";
console.log(`My name is ${firstname1}. My lastname is ${lastname2}`)

//################################################

//3.3 Insert the Expression in string using Template Literals.

//ES5

let a =20;
let b = 30;

console.log('Fifty is' + (a + b) + 'and\nnot ' + (2 * a + b ) + '.')

//ES6

console.log(`Fifty is ${a + b}. and 
not ${2 * a + b }.`)//hit enter for new line.


//************************************************* ES6-TemplateLiterals(TemplateStrings-)Method **************************

//ES6-String.Method

let fname1 = "Dhanashri";
let lname1 = "Raul";

console.log(`${fname1}`.startsWith('D'));//true
console.log(`${fname1}`.endsWith('a')); //true
console.log(`${fname1}`.includes('han'));//true
console.log(`${fname1}`.includes('tra'));//false
console.log(`${fname1} `.repeat(10));
console.log(`${fname1 } ${lname1}`.repeat(10));

//Now we can refactor above code.

const Refactor = `${fname1} `;
const fullname = `${fname1 } ${lname1}`;

console.log(Refactor. startsWith('D'));//true
console.log(Refactor. endsWith('a')); //true
console.log(Refactor. includes('han'));//true
console.log(Refactor. repeat(10));
console.log(fullname. repeat(10));



