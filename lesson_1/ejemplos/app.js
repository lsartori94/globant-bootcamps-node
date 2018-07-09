// Examples
// https://github.com/yargs/yargs/blob/HEAD/docs/examples.md

// Run
// node ./app.js --filename=4 --text="Demo Text"

const argv = require('yargs').argv;

console.log(`Estas guardando ${argv.text} into ${argv.filename}`);
