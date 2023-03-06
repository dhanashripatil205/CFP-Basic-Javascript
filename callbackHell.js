//Syntax of callback hell->

// firstFunction(args, function() {
//     secondFunction(args, function() {
//       thirdFunction(args, function() {
//         // And so on…
//       });
//     });
//   });


//e.g.1

function doSomething(callback){
    setTimeout(()=>{
        console.log("step one");
    })
callback();
}

function doSomethingElse(callback){
    setTimeout(()=>{
        console.log("step two");
    })
    callback();
}

 function doThirdSomething(callback){
    setTimeout(()=>{
        console.log("step three");
    })
    callback();
}

//callback hell so to avoid this use async function that will return a promises.

doSomething(function(){
    doSomethingElse(function(){
        doThirdSomething(function(){
            console.log("All steps are done.");
        })
            
        })
    })

//---------------------------------------------------------------------------------------------------------------------

//e.g.2

function one(name,callback){
    setTimeout(()=>{
        console.log("Hi My name is ",name);
    })
    callback();
}

function two(age,callback){
    setTimeout(()=>{
        console.log("Hi My age is",age);  
      })
      callback();

}

function three(name,callback){
    setTimeout(()=>{
        console.log("Hi My name is",name) ;  
     })
     callback();

}
//callback hell so to avoid this use async function that will return a promises.

one("Dhanashri",function(){
    two(13,function(){
        three("Motonico",function(){
            console.log("We all are friends........")
        });
    });
});


//this thing is not much readable so avoide the callback hell problem use Async function that will return the promises.

//---------------------------------------------------------------------------------------------------------------

//Async function will return the promise so use .then .catch block:-

//Async keyword is placed before the function keyword.

 async function one(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hiiiiiii")
        })
    })

}

async function two(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Helllllooooooo")
        })
    })
}

one()
.then((data)=>{
    console.log("Done with one",data);
})
.catch((error)=>{
    console.log("Data is failed",error);
})
two()
.then((data)=>{
    console.log("Done with two",data);
})
.catch((error)=>{
    console.log("Data is failed",error);
})

//-----------------------------------------------------------------------------------------------------------------

//Handling the multiple .then .catch block is difficult so we can optimize above code using await like below:-

async function one(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hiiiiiii")
        })
    })
}
async function two(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Helllllooooooo")
        })
    })
}
async function fncall(){
    let result = await one();
    console.log("Done with one------------>",result);

    let result2 = await two();
    console.log("Done with two------------>",result2);
}

fncall();
