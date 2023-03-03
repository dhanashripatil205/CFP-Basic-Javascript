//Promise.finally()

// A Promise call chain either successfully reaches the last. then(), or fails to trigger. catch(). In some cases, you want to run the same code no matter whether Promise runs successfully or fails, such as clearing, deleting conversations, closing database connections, etc.

function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // finish here!
  });
}