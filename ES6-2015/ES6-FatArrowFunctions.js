//Fat Arrow function

//ES5 Regular Function

// var sum = function(){
//     var a = 5;
//     var b = 10;
//     return a + b;
// }
// console.log(sum());

//ES6 Fat Arrow Function

// var sum = ()=>{
//     var a = 5;
//     var b = 10;
//     return a + b; //if more than 1 statements are present inside the function then you should return it.

// }
// console.log(sum());

//-------------------------------------------------------------------------------------------------------------------

//if single statement is present inside the body

// let a = 5;
// let b = 10;
//var sum = ()=>{return a + b}; //here no need to write retun or {} braces because only 1 statement is there.

// var sum = ()=>a + b;
// console.log(sum());

//--------------------------------------------------------------------------------------------------------------------

//Refactor above e.g

let a = 5;

var sum = (b)=>a + b;
console.log(sum(15));

//or we can write like this.

var sum = (a,b)=>a + b;
console.log(sum(15,20));