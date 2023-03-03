//2]Var,Let & Const

// var myname = "Dhanashri";
// console.log(myname);

// let broname = "Ganesh";
// console.log(broname);

// const momname = "Vandana";
// console.log(momname);

//################################################

//2.1 variable redeclaration is possible with Var but with let & const it cant be redeclared.

// var myname = "Dhanashri";
// var myname = 12;         //variable redeclaration is possible
// console.log(myname);

// let tmyname = "Dhanashri";
// let tmyname = 12;           //Not possible
// console.log(tmyname);

// const kit = "Dhanashri";
// const kit = 12;           //Not possible
// console.log(kit);

//################################################

//2.2 We can update the value of variable with let & var but not with const. 

// var fruit = "Apple";
// fruit="Banana";     //variable value updated.
// console.log(fruit);

// let animal = "cat";
// animal = "Dog";     //variable value updated.
// console.log(animal);

// const pi = 3.14;
// pi = 12;            //TypeError-Assignment to constant variable.
// console.log(pi);

//################################################

//2.3 Scope->var:global/function, let:block, const:block

// function modJS(java){
//     if(java){
//         var j = "vinod";
//         var s = "thapa";
//     console.log("My name is : "+j+ ""+"My sirname is: "+s);
//     }
//     console.log("My name is : "+j+""+"My sirname is: "+s); //function scope

// }

// modJS(true);

// function modJS(java){
//     if(java){
//         let j = "vinod";
//         let s = "thapa";
//     console.log("My name is : "+j+ ""+"My sirname is: "+s);//block scope
//     }
//     //console.log("My name is : "+j+""+"My sirname is: "+s); //undefined
// }

// modJS(true);


// function modJS(java){
//     if(java){
//         const j = "vinod";
//         const s = "thapa";
//     console.log("My name is : "+j+ ""+"My sirname is: "+s); //block scope
//     }
//     //console.log("My name is : "+j+""+"My sirname is: "+s); //undefined
// }

// modJS(true);


// var whoWillWinToday = "India";//global
// if(true){
//     var whoWillWinToday = "NewZeland";//variable value is updated

//     console.log(whoWillWinToday); //function scope
// }
// console.log(whoWillWinToday);//output=>NewZeland


// let whoWillWinToday = "India";//global scope
// if(true){
//     let whoWillWinToday = "NewZeland";//variable value is updated

//     console.log(whoWillWinToday); //block scope
// }
// console.log(whoWillWinToday);//output=>NewZeland India



// const whoWillWinToday = "India";//global scope
// if(true){
//     const whoWillWinToday = "NewZeland";//variable value is updated

//     console.log(whoWillWinToday); //block scope
// }
// console.log(whoWillWinToday);//output=>NewZeland India


//-----------------------------------------------------------------------------------------------------------------------

