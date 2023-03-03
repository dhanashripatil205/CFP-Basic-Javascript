//Spread Operator

//es5

// function sum(a,b,c){
//     console.log(a+b+c);
// }

// sum(1,2,3)

// var arrVal = [5,2,3];
// sum.apply(null,arrVal) //Replace apply()


//ES6 Remove Apply(), to tackle above problem we used below method.

//Remove Apply()

function sum(a,b,c){
    console.log(a+b+c);
}

var arrVal = [5,2,3];
sum(...arrVal); //arrVal holds [5,2,3] array.
//Remove the .apply() method from here.

//-------------------------------------------------------------------------------------------

//replace Concat

//ES5 concatination of 2 array

// var arr1 = [1,2,3];
// var arr2 = [2,5,6];

// arr1 = arr1.concat(arr2);
// console.log(arr1);

//ES6 concatination of 2 array

// let arr1 = [1,2,3];
// let arr2 = [2,5,7];
// arr1 = [...arr1,...arr2];
// console.log(arr1);
//output->[1,2,3,2,5,7]

//-------------------------------------------------------------------------------------------

//Replace copy();

//ES5

// let arrc1 = [1,2,3]
// let arrc2 = arrc1;
// console.log(arrc2);
// arrc2.push(4,5);
// console.log(arrc2);
//output=[1,2,3]
//output=[1,2,3,4,5]
//console.log(arrc1);
//output=[1,2,3,4,5] // this is the problem arrc2 array is affected on arrc1 array.

//ES6 to tackle above problem

//i want to copy the element in arrc2.

let arrc1 = [1,2,3];
let arrc3 = [9,8,7];

let arrc2=[...arrc1,4,5,...arrc3] //without using the push()
console.log(arrc2);//output=[1,2,3,4,5]
console.log(arrc1);//output=[1,2,3]//not affected on 1st array.
