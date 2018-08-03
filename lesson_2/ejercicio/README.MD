# Ejercicio 2 - Logger version web consola v1.1
Tomando el logger anterior, realizar un refactor para que tome los msg via peticion HTTP,

  -  Reemplazar callbacks por Promises
  -  Agregar un parametro - Session id 
  -  Nueva estructura del msg
    - [
      {
        seesionId: 'UUID',
        msg: 'text'
      },
      {
        seesionId: 'UUID',
        msg: 'text'
      },
    ]
  - Buscar dentro de npm un paquete para generar los uuid para cada nuevo log
  - Se guardara dentro de un json local con la extructura proporcionada anteriormente.

