![Alt text](https://cdn-images-1.medium.com/max/1200/1*9bVaonlM0iP8mSu45GzIeg.png "Title")
# Lesson 3 - Ejercicio
Express / RestAPI / Redix

# Descripcion
Nuestro nuevo objetivo es completar un endpoint en nodejs, el cual sea fuente de cache de promociones
vigentes, 
el cual debe contar:
  - url de consulta: http://localhost:3030/promociones
  - url para recargar las promociones: http://localhost:3030/promociones/refresh
  - url para eliminar todas las promociones: http://localhost:3030/promociones/clean


# Tareas a completar
  - en base a el archivo de promociones proporcionado, (data/promociones.json) evaluar que forma de cache es la mas adecuada
  - reutilizar todos los archivos existentes y crear los necesarios
  - mantener modularizadas las rutas
  - modularizar las consultas a redis