//Array Destructuring 

//ES5

//const myprogmlang = ['js','php','c','python','java']

// var top1 = myprogmlang[0];
// var top2 = myprogmlang[1];
// var top3 = myprogmlang[2];
// var top4 = myprogmlang[3];
// var top5 = myprogmlang[4];

//console.log("My fav programming language is "+top1);

//ES6 we can refactor above program

// let myprogmlang = ['js','php','c','python','java']// "," is used for seperate the variables
// let [top1,top2,top3,top4,top5] =myprogmlang ;

// console.log("My fav programming language is "+myprogmlang);

//console.log(myprogmlang.length);//define length of the array

//---------------------------------------------------------------------------------------------------------------------

//print only the 1st(top1) & last value(top5) of array & skip all the remaing values(top2,top3,top4).

//array values are seperated by "," so we can write like this->
let myprogmlang = ['js','php','c','python','java']// "," is used for seperate the variables
let [top1,,,,top5] =myprogmlang ;

//insert "," in between means i dont want to print (top1,top2,top3)thats why insert ,,,(3 commas)& 1 comma is inserted after 1st value its shows that value is seperated.So there are total 4 commas.

console.log(`My fav program language is ${top1}. & 2nd program language is ${top5}.`);//define length of the array





