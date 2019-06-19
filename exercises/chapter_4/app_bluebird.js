const request = require("promise-request");
const apiUrl = "https://jsonplaceholder.typicode.com";
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("You need to especify a comment id");
  process.exit();
}
