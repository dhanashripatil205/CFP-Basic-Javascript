//Async/Await

//async keyword can be placed before a function.

// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

// For instance, this function returns a resolved promise.

//Await-The keyword await makes JavaScript wait until that promise settles and returns its result.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();