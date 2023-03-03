//Default Parameters

//e.g

//ES6

//function multiplication(a,b){//parameters are 2
    //console.log(b) //undefined because we havn't pass any arguments for b.

    // b = (typeof b !== 'undefined') ? b :2;//we can write b like this but this is not an efficient way for multiple parameters/arguments if we are passing.

    // console.log(a*b);
//}

//multiplication(4); //We have passed 1 argument

//output-NAN(Not a Number)

//-----------------------------------------------------------------------------------------------------------

//To tackle above problem

//ES6 1st way--- using Regular function
// function multiplication(a,b=5){

// console.log(a*b);
// }

// multiplication(10);

//ES6 2nd way--- using Arrow function
const multiplication = (a,b=4,c=3)=>{ 

    console.log(`result is ${a*b+c}`)
}
multiplication(10);