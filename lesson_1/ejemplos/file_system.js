// RUN
// node ./file_system.js

const fs = require('fs');

const filename = './demo.json';
const demoObject = { text: 'demo' };

const readFile = (file) => {
  fs.readFile(filename, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log('Read: ', JSON.parse(data));
  });
};

const createFile = (file, callback) => {
  console.log('Creado el archivo');
  fs.writeFile(filename, JSON.stringify(demoObject), (err) => {
    if (err) {
        return console.error(err);
    }
    callback(filename)
  });
}

const fileExists = (file, create, read) => {
  fs.exists(file, (exists) => {
    if (!exists) {
      console.log('El archivo no existe');
      create(file, read);
    } else {
      console.log('El archivo existe');
      read(file);
    }
  });
}

// Inicio de ejecucion
fileExists(filename, createFile, readFile)