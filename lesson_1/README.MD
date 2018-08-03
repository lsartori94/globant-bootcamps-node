![Alt text](https://cdn-images-1.medium.com/max/1200/1*9bVaonlM0iP8mSu45GzIeg.png "Title")
# Lesson 1 - Training nodejs developer 
instalación y conceptos base + ejercicio 

# Temas
  - Instalar [Node.js](https://nodejs.org/)
  - Instalar [GIT](https://git-scm.com/)
  - Instalar un IDE
    - [ATOM](https://atom.io/)
    - [VSCODE](https://code.visualstudio.com/)
    - [SUBLIME](https://www.sublimetext.com/)
  - Globales process / module
  - HelloWorl.js y npm nodemon (autoreload)
  - Export & Require
  - File System [FS](https://nodejs.org/api/fs.html)
  - [Date](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date)
  - [JSON](https://www.json.org/) - (JavaScript Object Notation)
  - [argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv/)  - arguntos por consola
  - [npm](https://www.npmjs.com/) - gestor de packetes oficial de node
  - yargs - npm package


### Checkeo
Teniendo instalado nodejs del cual podemos descargar del link anterior, podemos verificar que este correctamente instalado corriendo el siguiente comando desde la terminal/consola que tengamos disponible

```sh
$ node -v
$ npm -v
```

la salida de estos comandos nos informara las versiones que tenemos instaladas, tanto de Nodejs como de NPM - (Gestor de packetes de node).

### Instalacion Global del nodemon

```sh
$ npm install -g nodemon
```

### Inicio
Dentro de cada una de las secciones se encuentran disponibles ejemplos con cada uno de los temas / ejercicio para aplicar lo aprendido en la seccion

### Ejecutar código
Tenemos dos formas de ejecutar codigo desde la consola, con node directamente

```sh
$ node ./app.js
```

o bien con nodemon, (en modo desarrollo para que genere el autoreload de los cambios)

```sh
$ nodemon ./app.js
```