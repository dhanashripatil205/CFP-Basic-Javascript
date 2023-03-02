//Callback->A callback is function passed as an argument to another function.

//A callback is function that is to be executed after another function has finished executing.hence the name call-back.

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