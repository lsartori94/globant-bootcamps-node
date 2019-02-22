const fs = require('fs');
const action = require('./src/actions');

let a;

fs.readFile('./resources/name.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})
