// The process object is a global that provides information about,
// and control over, the current Node.js process. As a global, it is
// always available to Node.js applications without using require().
console.log('Process: ', process);

// In the Node.js module system, each file is treated as a separate module. 
// https://nodejs.org/api/modules.html#modules_modules
console.log('Module: ', module);