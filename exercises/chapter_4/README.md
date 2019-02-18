# Excercise 1 - bluebird - v1.0

### What to do?
Let's compare these approaches: callbacks, promises and bluebird.

In this folder, you have an exercise `app.js` with some request using callbacks.

Before starting, let's run the example ....
- In a console, go to `chapter_4` folder
- run `npm install`
- run `node app.js {a number}` -> {a number} represents an id of a comment in this [API testing site](https://jsonplaceholder.typicode.com/)
- You should see information about the user who created the post where the comment was made.
```
$ node app.js 3
Nombre: Leanne Graham
Email: Sincere@april.biz
Company: Romaguera-Crona
```
OK, let's start.

- You should rewrite this code using promises instead of callbacks 
- You should rewrite this code using bluebirds promises instead of native promises.
- You should rewrite this code using async/await.

Your folder structure should look like this:
```
chapter_4
├── app.js
├── app_promises.js
├── app_bluebirds.js
├── app_async_await.js
└── package.json
```

Finally, the app should return the same result for each approach.
- run `node app.js`
- run `node app_promises.js`
- run `node app_bluebird.js`
- run `node app_async_await.js`
