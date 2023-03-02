//Every const declaration must be initialized at the time of declaration.

//const object cannot be updated, the properties of this objects can be updated. 

//Therefore, if we declare a const object as this:

const greeting = {
    message: "say Hi",
    times: 4
}

//we cannot do this:

greeting = {
    words: "Hello",
    number: "five"
} // error:  Assignment to constant variable.

//we can do this:

greeting.message = "say Hello instead";

//---------------------------------------------------------------------------------------------------

//Hoisting of const
//Just like let, const declarations are hoisted to the top but are not initialized.