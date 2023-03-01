//Difference between let, var & const

//1]SCOPE

var greeter = "hey hi";  //globally scoped(var variable is declared outside a function.)
    
    function newFunction() {
        var hello = "hello"; //function scoped(var is declared within a function.)
    }

    console.log(greeter); //output-hey hi
    console.log(hello);   //Reference error-hello is not defined.
//-----------------------------------------------------------------------------------------

//2]var variables can be re-declared and updated.

    var greeter = "hey hi";
    var greeter = "say Hello instead";//(1st way to redeclared)

    var greeter = "hey hi";
    greeter = "say Hello instead";//(2nd way to redeclared)

//-----------------------------------------------------------------------------------------

//3]Hoisting of Var->Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//e.g.if we do this:

console.log (greeter);
var greeter = "say hello"

//it is interpreted as this:

var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"

//So var variables are hoisted to the top of their scope and initialized with a value of undefined.

//-----------------------------------------------------------------------------------------

//4]Problem with var->

var greeter = "hey hi";//globally scope
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; //function scope-true-function scope > global scope-output-say Hello instead.
    }
    
    console.log(greeter) //output- "say Hello instead"

    //here we haeve redeclared the var keyword & becoz of this will cause a lot of bugs in code. thats why let & const is came.