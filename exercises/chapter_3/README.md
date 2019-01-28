# Excercise 1 - Logger Function - v2.0

### What to do?
Remeber the previous chapter? Well, take that _logger_ and let's do some refactor.

- You should output the log to a file called `log.json`
- If the file exists, do an append, if not, create it
- You can add any NPM package you want ([](https://www.npmjs.com/package/yargs) for example) _remember to [create a package.json file](https://docs.npmjs.com/cli/init))
- You should separate the logger to a standalone file, then import and use it in `app.js`
- Create a [`.gitignore` file](https://help.github.com/articles/ignoring-files/) so you don't add extra folders, like `node_modules`

Your folder structure should look like this:
```
chapter_2
----|_ app
-------|_ app.js
-------|_ utils
----------|_ logger.js
-------|_ package.json
-------|_ .gitignore
```

Now let's add some new requirements
- Make 2 versions one using callbacks, another using promises
- Comment one, don't worry we'll test both
- Add a new parameter to the logger called `sessionId`
- Look for a npm package that generates uuid
- Integrate [nodemon](https://nodemon.io/) on the app
- Add an npm start script

Your `log.js` file should look something similar to:
```
[
    {
        sessionId: 'UUID',
        msg: 'text'
    }
]
```
The app should now be able to start with `npm start`
