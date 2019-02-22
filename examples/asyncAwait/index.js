const call = require('./src');

// call.greet('German Marquez');

async function asyncFunction() {
    const fullname = await call.withPromise('German', 'Marquez');
    console.log(fullname);
}

asyncFunction();