# Ejercicio 1 - Logger version Parametros por consola v1.0
El ejercicio consistira en crear un logger al cual se le proveeran los datos a loggear por 
argumentos de consola. 

  -  Si el archivo de log no existe se debe crear y luego guardar el msg de log con la fecha/hora/segundos correspondientes a ese msg
  -  Si el archivo existe se debe hacer un append con fecha/hora/segundos y el msg

El ejercicio tiene que ser creado dentro de la carpeta ejercicio, y se revisara mediante un Pull Request al Branch correspondiente con el siguiente formato LESSON_X_GLOBER

### Requisitos
  -  RUN node ./app.js --msg="Demo MSG"
  -  Punto de entrada app.js
  -  Usar module.exports y require para separar funcionalidades y complir con los requerimientos SOLID/DRY
  -  Utilizar yargs y los packets de npm que crea necesario
  -  Las variables de configuracion tienen que estar dentro de un archivo config.json del cual se tomara:
    -  Nombre del archivo de log
    -  Version del logger
