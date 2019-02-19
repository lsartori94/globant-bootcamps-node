# Excercise 1 - express - v1.0

### What to do?
_In this exercise, we will develop some features that will be part of the final exercise._

We're ready to develop our first real and useful endpoints. We'll use a base code that you need to complete, and some fake data that we gonna change in the next chapters.

#### Entities that we'll use

|Entities  |Attributes  |
|---|---|
|**user** | - **username**: String<br>- **pass**: String<br>- **name**: String<br>- **lastname**: String<br>- **email**: String<br>- **createdAt**: Date|
|**card** | - **title**: String.<br>- **description**: Text.<br>- **owner**: \<userid\> _reference to the user who creates the card_|
|**comment** | - **text**: Text.<br>- **author**: \<userid\> _reference to the user who creates the comment_<br>- **card**: \<cardid\> _reference to the card where the comment was created_<br>- **createdAt**: Date|

#### Before starting, let's run the base ....

- in a console, go to chapter_5 folder
- run `npm install`
- run `npm start`

#### To work
OK, let's start with the endpoints.

|Method  |Endpoint  |Description |
|---|---|---|
|GET|/users |a list of users|
|GET|/users/\<userid\>|retrieve a user by id|
|GET|/users/\<userid\>/posts|get posts of a user|
|GET|/cards|a list of cards|
|GET|/cards/\<cardid\>|retrieve a card by id|
|GET|/cards/\<cardid\>/comments|get comments of a card|
|GET|/comments|a list of comments|
|GET|/comments/\<commentid\>|retrieve a comment by id|

Your folder structure should look like this:
```
chapter_5
├── package.json
└── src
    └── api-server
        ├── core
        │   ├── app.js
        │   └── config.js
        └── resources
            ├── users
            │   ├── routes.js
            │   ├── actions.js
            │   └── controllers.js
            ├── cards
            │   ├── routes.js
            │   ├── actions.js
            │   └── controllers.js
            └── comments
                ├── routes.js
                ├── actions.js
                └── controllers.js
```
