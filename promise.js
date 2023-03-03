// Promises-> are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 

// Multiple callback functions would create callback hell that leads to unmanageable code. Also it is not easy for any user to handle multiple callbacks at the same time.
// Events were not good at handling asynchronous operations.

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// myPromise.state	  myPromise.result
// "pending"	      undefined
// "fulfilled"	      a result value
// "rejected"	      an error object

//###Syntax->

// new Promise((resolve,reject)=>{
//     resolve();
//     reject();
// }).then(()=>{

// }).catch(()=>{

// })

//--------------------------------------------------------------------------------------------------------------------

//e.g.1)if promise inside the function, it will return.
// const xyz= ()=>{
//     return new Promise((resolve,reject)=>{
//         let flag = false;
//         if(flag==true)
//         {
//             resolve("Promise resolved so call to .then().");
//         }
//         else{
//             reject("Promise rejected so call to .catch().");
//         }
//     });
// };

// xyz()

// .then((result)=>console.log("After resolved",result))
// .catch((error)=>console.log("After rejected",error));


//----------------------------------------------------------------------------------------------------------------

//e.g.2)Create the promise function directly.

// let myPromise = new Promise((resolve, reject)=> {
//     setTimeout(function() {

//     resolve("Regular function executed after 3 sec."); 

//     }, 3000);

//   });
  
//   myPromise

//   .then((param)=>{
    
//     console.log("After resolved",param)
//   })

  //---------------------------------------------------------------------------------------------------------------

  //e.g.3)Create the promise function directly.

//   var promise = new Promise(function(resolve, reject) {
//     const x = "Hi";
//     const y = "Dhanashri"
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
        
//     promise
//         .then(function () {
//             console.log('Success, You are a GEEK');
//         })
//         .catch(function () {
//             console.log('Some error has occurred');
//         });
    
//--------------------------------------------------------------------------------------------------------------------

  //e.g.4)if promise inside the function, it will return.

// const fresh = ()=>{
//     //console.log("This is arrow function.");

//    return new Promise((resolve,reject)=>{
        
//         let n=4;
//         for(i=0; i<n;i++)
//         {
//            console.log(i);
//            resolve("Congrats!!!");
//         }

//     });  
// };

// fresh()
// .then(function (fun) {
//                console.log('Success, You are a Fab',fun);
//             })

//-----------------------------------------------------------------------------------------------------------------
  //e.g.5)if promise inside the function, it will return.

//   function function_name (){

//     console.log("This is a normal function");

//     return new Promise((resolve,reject)=>{

//         let n = 7;
//         let i=5;

//         if(i===n)
//         {
//             resolve("Resolved");
//         }
//         else
//         {
//             reject("rejected")
//         }
//     });
//   }

//   function_name()

//   .then((result)=>{

//     console.log("Succesfully",result);
//   })
//   .catch((error)=>{

//     console.log("UnSuccesfully",error);
//   })

//---------------------------------------------------------------------------------------------------------------

  //e.g.6)Create the promise function directly.        

  var promise = new Promise(function(resolve,reject) { 
    reject('Promise Rejected') 
   }) 
    
promise 
    .then(function(successMessage) { 
        console.log("Great",successMessage); 
    })
    
    .catch(function(errorMessage) { 
        console.log("Finally",errorMessage); 
    })