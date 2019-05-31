const fs = require('fs');
module.exports = {
    /**
    * logger checks if the parsed parameters are correct
    * and concatenates them with the current date before print them
    * If they are not correct it prints a error message
    * 
    * @param {*} paramsparsed 
    */
    logger: function (paramsparsed, sId) {
        /**
         * This line checks that the params have been sent
         * and they are in the correct format and they aren't empty
         */
        if (paramsparsed['msg']) {
            var jsonObject = new Object();
            jsonObject.sessionId = sId;
            jsonObject.msg = paramsparsed['msg'].concat(' ', new Date().toDateString());
            var jsonFile;
            //CALLBACK METHOD
            //If the file doesn't exist it creates a empty array and push the json object on it
            //  fs.readFile('log.json', (err, data) => {
            //      if (err) {
            //          jsonFile= [];
            //      }
            //      else{
            //          jsonFile = JSON.parse(data);
            //      }
            //      jsonFile.push(jsonObject);
            //      fs.writeFile('log.json', JSON.stringify(jsonFile, null, 2), (err) => {
            //          if (err) throw err;
            //      });  
            //  });
            new Promise(function (resolve, reject) {
                fs.readFile('log.json', (err, data) => {
                    if (err) {
                        reject();
                    }
                    else {
                        resolve(data);
                    }
                });
            }).then(function (data) {
                jsonFile = JSON.parse(data);
            }).catch(function () {
                jsonFile = [];
            }).finally(function () {
                jsonFile.push(jsonObject);
                new Promise(function (resolve, reject) {
                    fs.writeFile('log.json', JSON.stringify(jsonFile, null, 2), (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }).catch(function (err) {
                    throw err;
                }).then(function () {
                    console.log('File ok');
                });
            });

        } else {
            console.log('Wrong format of params sent or empty params');
        }
    }
};