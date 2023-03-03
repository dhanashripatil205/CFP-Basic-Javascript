//1]Hoisting of Var->Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//e.g.if we do this:

console.log (greeter);
var greeter = "say hello"

//it is interpreted as this:

var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"

//So var variables are hoisted to the top of their scope and initialized with a value of undefined.

//---------------------------------------------------------------------------------------------------------------------

//2]Hoisting of let->let keyword are hoisted to the top of their scope and its not initialized.
	                 //So if you try to use a let variable before declaration, you'll get a Reference Error.

console.log (greeter);//Reference error-cannot access 'greeter' before initialization
let greeter = "Shree"

//---------------------------------------------------------------------------------------------------------------------

//3]Hoisting of const->Just like let, const declarations are hoisted to the top but are not initialized.
