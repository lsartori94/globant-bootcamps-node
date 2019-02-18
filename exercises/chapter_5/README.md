# Excercise 1 - express - v1.0

### What to do?
_In this exercise, we will develop some features that will be part of the final exercise._

We are ready to develop our real and useful endpoints. 

#### Entities that we'll use

|Entities  |Attributes  |
|---|---|
|**user** | - **username**: String<br>- **pass**: String<br>- **name**: String<br>- **lastname**: String<br>- **email**: String<br>- **createdAt**: Date|
|**card** | - **title**: String.<br>- **description**: Text.<br>- **owner**: \<User\> _reference to the user who creates the card_|


OK, let's start with the endpoints.

- TBD

Your folder structure should look like this:
```
chapter_5
├── .env
├── package.json
└── src
    └── api-server
        ├── core
        │   ├── app.js
        │   └── config.js
        └── resources
            ├── user
            │   ├── routes.js
            │   ├── models.js
            │   ├── actions.js
            │   └── controllers.js
            └── otherResource
                └── ...
```
