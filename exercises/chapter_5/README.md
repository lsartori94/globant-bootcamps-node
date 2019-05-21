# Chapter 5 - Excercise 1 - express - v1.0

### What to do?
_In this exercise, we will develop some features that will be part of the final exercise._

We're ready to develop our first real and useful endpoints. We'll use a base code that you need to complete, and some fake data that we gonna change in the next chapters.

#### Entities that we'll use

|Entities  |Attributes  |
|---|---|
|**user** | - **username**: String<br>- **pass**: String<br>- **name**: String<br>- **lastname**: String<br>- **email**: String<br>- **createdAt**: Date<br>- **profile**: \<profileid\> _reference to the profile entity_|
|**profile** | - **name**: String.<br>- **description**: Text.<br>- **createdAt**: Date|
|**role** | - **name**: Text.<br>- **createdAt**: Date|
|**profile_role** | - **profile_id**: \<profileid\> _reference to the profile entity_<br>- **role_id**: \<roleid\> _reference to the role entity_|

#### Before starting, let's run the base ....

- in a console, go to chapter_5 folder
- run `npm install`
- run `npm start`
- try `localhost:9001/api/v1` with POSTMAN or similar
- try `localhost:9001/api/v1/users` with POSTMAN or similar

#### To work
OK, let's start with the endpoints.

|Method  |Endpoint  |Description |
|---|---|---|
|GET|/users |a list of users|
|GET|/users/\<userid\>|retrieve a user by id|
|GET|/profiles |a list of profiles|
|GET|/profiles/\<profileid\>|retrieve a profile by id|
|GET|/roles |a list of roles|
|GET|/roles/\<roleid\>|retrieve a role by id|

Your folder structure should look like this:
```
chapter_5
├── package.json
└── src
    ├── api-server
    │   ├── core
    │   │   ├── app.js
    │   │   └── config.js
    │   ├── models
    │   │   ├── index.js
    │   │   └── user.js
    │   ├── resources
    │   │   ├── users
    │   │   │   ├── routes.js
    │   │   │   ├── actions.js
    │   │   │   └── controllers.js
    │   │   ├── profiles
    │   │   │   ├── routes.js
    │   │   │   ├── actions.js
    │   │   │   └── controllers.js
    │   │   └── roles
    │   │       ├── routes.js
    │   │       ├── actions.js
    │   │       └── controllers.js
    │   └──  server.js
    └── test-helpers
        └── users.js
```

### Bonus

- Add validations to the endpoints
- Use a middleware for the validations -> [How to ...](https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7)
