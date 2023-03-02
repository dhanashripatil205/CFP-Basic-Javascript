// Promises-> are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 

// Multiple callback functions would create callback hell that leads to unmanageable code. Also it is not easy for any user to handle multiple callbacks at the same time.
// Events were not good at handling asynchronous operations.

const xyz= ()=>{
    return new Promise((resolve,reject)=>{
        let flag = false;
        if(flag==true)
        {
            resolve("Promise resolved so call to .then().");
        }
        else{
            reject("Promise rejected so call to .catch().");
        }
    });
};

xyz()

.then((result)=>console.log("After resolved",result))
.catch((error)=>console.log("After rejected",error));
