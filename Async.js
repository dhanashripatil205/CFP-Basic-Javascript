//************************************ Async ************************************

//There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. 

//async keyword is placed before a function.

//The word “async” before a function means function always returns a promise. Other values are wrapped in a resolved promise automatically.

//e.g.->1)
async function f() {
    return 1;
  }

//e.g.->2)

  // async function flip() {
  //   return 1;
  // }
  
  // flip().then(alert); // output=1

  //e.g.->3)

  // async function few() {
  //   return Promise.resolve(1);
  // }
  
  // few().then(alert()); // output=1

//------------------------------------------------------------------------------------------------------

//e.g.4)

const getData = async() => {
  var data = "Hello World";
  return data;
  }
    
  getData()
  .then((data) => {
    console.log(data);
  });

//------------------------------------------------------------------------------------------------------

//e.g.5)


	async function mainMethod() {

	let promise = new Promise((resolve, reject) => {
    resolve("Hello")

  });
  
}

//------------------------------------------------------------------------------------------------------

//e.g.6)

async function myFunction() {
  return "Hello";
}

//------------------------------------------------------------------------------------------------------

//e.g.7)

async function marry(){
  return 5;//return promise
}

marry().then((value)=>{
  alert(value);
})