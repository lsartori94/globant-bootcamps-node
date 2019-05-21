### What to do?
_In this exercise, we will develop the features of the final exercise._

We're ready to develop our first real and useful endpoints. We'll use a base code that you need to complete.

#### Entities that we'll use

|Entities  |Attributes  |
|---|---|
|**user** | - **username**: String<br>- **pass**: String<br>- **name**: String<br>- **lastname**: String<br>- **email**: String<br>- **createdAt**: Date<br>- **profile**: \<profileid\> _reference to the profile entity_|
|**profile** | - **name**: String.<br>- **description**: Text.<br>- **createdAt**: Date|
|**role** | - **name**: Text.<br>- **createdAt**: Date|
|**profile_role** | - **profile_id**: \<profileid\> _reference to the profile entity_<br>- **role_id**: \<roleid\> _reference to the role entity_|

#### Before starting, let's run the base ....

- in a console, go to excercise folder
- run `npm install`
- run `npm start`

#### To work
OK, let's start with the endpoints.

|Method  |Endpoint  |Description |
|---|---|---|
|GET|/users |a list of users|
|GET|/users/\<userid\>|retrieve a user by id|
|POST|/users>|create a new user|
|PUT|/users/\<userid\>|update a user by id|
|DELETE|/users/\<userid\>|delete a user by id|
|GET|/profiles |a list of profiles|
|GET|/profiles/\<profileid\>|retrieve a profile by id|
|POST|/profiles|create a profile|
|POST|/profiles/\<profileid\>/users|assign a profile to a list of user|
|PUT|/profiles/\<profileid\>|update a profile by id|
|DELETE|/profiles/\<profileid\>|delete a profile by id|
|GET|/roles |a list of roles|
|GET|/roles/\<roleid\>|retrieve a role by id|
|POST|/roles|create a role|
|PUT|/roles/\<roleid\>|update a roleid by id|
|DELETE|/roles/\<roleid\>|delete a roleid by id|

Your folder structure should look like this:
```
excercise
├── package.json
├── .sequelizerc
└── src
    ├── api-server
    │   ├── core
    │   │   ├── app.js
    │   │   └── config.js
    │   ├── migrations
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

### Steps two
- Add validations to the endpoints
- Use a middleware for the validations