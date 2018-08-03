![Alt text](https://cdn-images-1.medium.com/max/1200/1*9bVaonlM0iP8mSu45GzIeg.png "Title")
# Lesson 5 - Ejercicio
Express / RestAPI / Mongo

# Descripcion
Con nuestro CRUD de usuarios listo, tenemos la solicitud de crear una url de login para
authenticar usuarios, luego de esto tambien tenemos que crear una url segura solomente accesible con un token (JWT) valido

  - url de login: http://localhost:3030/login
  - url segura: http://localhost:3030/dashboard


# Tareas a completar
  - encryptar la contraseña del CRUD de usuarios para complicar con las normas de seguridad y resguardo de datos
  - utilizar (JWT package)[https://github.com/auth0/express-jwt] integrarlo y utilizarlo para la seguridad de las rutas
  - en la ruta segura /dashboard, exponer los datos del token