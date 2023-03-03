//SharedArrayBuffer object

// With SharedArrayBuffer, multiple web workers can read and write the same block of memory at the same time. You no longer need postMessage communication with delay. Multiple web workers have no delay in data access

// The SharedArrayBuffer object is used to represent a general, fixed length raw binary data buffer, similar to the ArrayBuffer object, which can be used to create views on shared memory. Unlike ArrayBuffer, SharedArrayBuffer cannot be separated.

/**
 * 
 * @param {*} length The size of the array buffer created, in bytes.  
 * @returns {SharedArrayBuffer} A new SharedArrayBuffer object of the specified size. Its contents are initialized to 0.
 */
new SharedArrayBuffer(length)
