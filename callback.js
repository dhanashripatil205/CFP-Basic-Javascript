//Callback->A callback is function passed as an argument to another function, and is called after the main function has finished its execution.hence the name call-back.

// The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result.

//Callbacks are used to handle the results of asynchronous operations in a non-blocking manner.Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. This can lead to a poor user experience, as the program would appear unresponsive.

//Callbacks allow you to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation. This way, you can ensure that the program remains responsive and the user experience is not impacted.

let test = (callback)=>{
    console.log("Hello");
    callback();
}

let testOne = ()=>{
    console.log("Hi My name is Dhanashri");
}

test(testOne);

//------------------------------------------------------------------------------------------------------------------------

//Callback for Anonymous function->

let testnew = (callback)=>{
    console.log("Little");
    callback();
}

testnew(()=>{
    console.log("Anonymous Function is primted.")
})

//NOTE->whole anonymous function is passed as an argument inside the function call.i.e.testnew().

//------------------------------------------------------------------------------------------------------------------------

//e.g.1)

function mainFunction(callback) {
    // console.log("Performing operation...");
    // setTimeout(function() {
    //     callback("Operation complete");
    // }, 2000);
    }
    
    // Define the callback function
    function callbackFunction(result) {
    console.log("Result: " + result);
    }
    
    // Call the main function with the callback function
    mainFunction(callbackFunction);
    
//------------------------------------------------------------------------------------------------------------------------

//e.g.2)
//Main function
let arrow = (callback)=>{
    var x=6,y=7,z;
    z=x+y;
    console.log(z);
    callback();
}

//Define callback function
let make = ()=>{
    console.log("How beautiful you are!")
}

arrow(make);//function calling

//------------------------------------------------------------------------------------------------------------------------

//e.g.3)

var numbers = [1, 2, 3, 4, 5];//Array


function main(callback) {
console.log("Main Function operation...");
// Use Array.forEach to loop through the array of numbers
numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
console.log("Result: " + number);
}

// Call the main function with the callback function
main(callbackFunction);

//------------------------------------------------------------------------------------------------------------------------

//e.g.4)

function newFunction(callback){
    callback();//undefined
    console.log("Regular Function"); //Execute main function 1st 
}

function callbackfunction(){
    console.log("callback function");//becoz of undefined its not printed.
}

newFunction(callbackFunction)

//------------------------------------------------------------------------------------------------------------------------

//e.g.5)

// Main function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('Callback function');
}

// passing function as an argument
greet('Dhanashri', callMe);

//------------------------------------------------------------------------------------------------------------------------

//e.g.6)

// Main function
function greet(name, call) {
    console.log('Hi' + ' ' + name);
    
    call();
    }

// callback function
function callMe() {
    console.log('Callback function');
}
// passing function as an argument
greet('Dhanashri', callMe);

