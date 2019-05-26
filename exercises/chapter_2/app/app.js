const process = require("process");
const minimist = require("minimist");

let args = minimist(process.argv.slice(2), {
  alias: {
    msg: "message"
  }
});

const logger = function(msg) {
  console.log(msg.concat(` --> ${new Date().toDateString()}`));
};

if (!!!args.msg) {
  console.log("usage: [--msg=<message>]");
} else {
  if (args.msg === true)
    console.log("should enter a message after --msg option...");
  else {
    for (string of args.message.split(" ")) {
      logger(string);
    }
  }
}
