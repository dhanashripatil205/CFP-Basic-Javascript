//**************************************** Await ****************************************

//The keyword await makes JavaScript wait until that promise settles and returns its result.

//Await function is only allowed in Async function.

// async function newFunction() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("done!"), 15000})
        
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"

//     console.log("HIIIIIIIIIIIIII");
//   }
  
//   newFunction();

  //---------------------------------------------------------------------------------------

  //NOTE->Can’t use await in regular functions

  //e.g.1)

//   function f() { //async keyword is not used before the function keyword so here we can't use the await function.
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntax error
//   }

//---------------------------------------------------------------------------------------

//e.g.2)

const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}
  
console.log(1);
getData();
console.log(2);

//---------------------------------------------------------------------------------------

//e.g.3)

async function display() {
    let data = await "Dhanashri"
    console.log(data);
    }
      
    display();

//---------------------------------------------------------------------------------------

//e.g.4)

function resolveAfter2Seconds(para) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(para);
      }, 2000);
    });
  }
  
  async function flip() {
    const x = await resolveAfter2Seconds(110);
    console.log(x); // 110
    console.log("Resolved!!!");
  }
  
  flip();

//---------------------------------------------------------------------------------------

//e.g.5)

async function valid() {
    const pick = {
      then(resolve, reject) {
        resolve("Congratulations!!!");
      },
    };
    console.log(await pick); // "resolved!"
  }
  
  valid();