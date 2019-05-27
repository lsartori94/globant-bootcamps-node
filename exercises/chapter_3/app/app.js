const callFs = require("fs");
const uuidv1 = require("uuid/v1");
const logger = require("./utils/logger.js");

//ask for good practices in function calling
callFs.writeFile(
  "log.json",
  JSON.stringify(logger.logger("this is a test message", uuidv1()), null, 2),
  { flag: "a" },
  err => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log("File written");
  }
);

/*/
callFs.promises
  .writeFile(
    "log.json",
    JSON.stringify(logger.logger("this is a test message", uuidv1()), null, 2),
    { flag: "a" }
  )
  .then(console.log("File written"))
  .catch(e => {
    console.log(e);
  });
/*/
