# Learn NodeJS

Index

### Chapter 1:  Beginning

 - Async programming/Event Loop/Non-blocking
 - Node versions (LTS, etc)
 - Use cases


### Chapter 2:  Installing

 - npm
 - Modules
 - Require
 - Exports
 - Package JSON 
 - Unix philosophy (Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new "features".)

### Chapter 3:  Calling

 - Callback scheme
 - Callback hell
 - Async
 - Promises

### Chapter 4: Interfacing

Internal modules (fs, http and friends)


### Chapter 5:  Getting

 - Express
 - Creating APIs with Swagger + express
 - Use validation middleware like Joi
 - Generating mock responses


### Chapter 6: Storing

 - Redis - for caching
 - Connect with MongoDB using Mongoose


### Chapter 7: Pushing

 - Event Emitters
 - Socket IO
 - Firebase

### Chapter 8: Fixing

 - Debugging
 - Testing (mocha, chai and supertest) - using mocks and stubs while testing
 - Common NFRs - system logging and performance logging

### Chapter 9: Streaming

 - Streams & CSV Processing

### Chapter 10: Deploying

 - Deployment
 - npm publish
 - keeping up to date


### Chapter 11: Scaling

 - Docker
 - Cluster module
 - Performance debugging


### Chapter 12: Succeeding

 - Demo and Best Practices


---

<img src="https://image.flaticon.com/icons/svg/881/881900.svg" width="55">


#### Project to Do: Grab-my-seat

seed: https://github.corp.globant.com/NodeJS/flicks

* Separate deployable apps will be created for front-end code and APIs.
* Front end code will be an express application while APIs will be built using swagger and express
* Front end app will use streaming to display video trailers
* Front end app will use socket.io for booking tickets
* API app will expose APIs to search movies and to book tickets. I intend to cover GET, POST, PUT and DELETE methods
* API app will store the data in Mongo DB using mongoose
* API app will use Redis to cache the API service response
* API app will expose an API to upload movie information in CSV format in MongoDB.