const callFs = require("fs");
const uuidv1 = require('uuid/v1');
//const promFs = require("fs").promises;
const logger = require("./utils/logger.js");

callFs.writeFile(
  "log.json",
  logger.logger(`${uuidv1()}`),
  { encoding: "utf-8", flag: "a" },
  (err, fd) => {
    if (err) {
      console.log(err);
    }
    console.log("File written");
  }
);

