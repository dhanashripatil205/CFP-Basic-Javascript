//1]block scoped->e.g

let greeting = "say Hi"; //global scope
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead"; //function / block scope
        console.log(hello);// "say Hello instead"
    }
   //console.log(hello) // hello is not defined

//-----------------------------------------------------------------------------------------------------

//2]let can be updated but not re-declared.

let greeting1 = "say Hi";
greeting1 = "say Hello instead";//updated the value of greeting1

//re-declarartion is not possible in same scope with same variable.

// let nano = "say Hi";
// let nano = "say Hello instead"; // error: Identifier 'nano' has already been declared.

//if the same variable is defined in different scopes, there will be no error.

//e.g.

let para = "say Hi"; //global scope
    if (true) {
        let para = "My name is Dhanashri";
        console.log(para); // "say Hello instead" //function scope
    }
    console.log(para); // "say Hi"

//-----------------------------------------------------------------------------------------------------

//3]Hoisting of let->let keyword are hoisted to the top of their scope and its not initialized.
	                 //So if you try to use a let variable before declaration, you'll get a Reference Error.

                     console.log (greeter);//Reference error-cannot access 'greeter' before initialization
                     let greeter = "Shree"