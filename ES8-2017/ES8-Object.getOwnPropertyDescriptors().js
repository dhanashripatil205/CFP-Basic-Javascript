//Object.getOwnPropertyDescriptors()

// The Object.getOwnPropertyDescriptor method returns an object (descriptor). ES6 introduces the Object.getOwnPropertyDescriptors method, which returns the description object of all its own properties (non inherited properties) of the specified object.

const obj = {
    foo: 123,
    get bar() { return 'abc' }
  };
   
  let by = Object.getOwnPropertyDescriptors(obj)

  console.log(by);