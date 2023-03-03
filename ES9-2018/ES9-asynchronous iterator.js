//ES9-asynchronous iterator.js

// ES9 introduces asynchronous iterators, just like regular iterators, except that the next() method returns a Promise. Therefore, await can be used with the for...of loop to run asynchronous operations in a serial manner. For example:

async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}