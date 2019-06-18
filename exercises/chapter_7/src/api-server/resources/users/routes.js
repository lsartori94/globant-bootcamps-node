const config = require ('../../core/config');
const users = require('./controllers');
const actions=require('./actions');

module.exports= function initRoutes(app){
    // Profiles resource base route
    const basePath = config.basePath + '/users';
    app.get(basePath,users.v1.getAll);
    app.get(basePath+'/:id', actions.validateId, users.v1.getById);
    app.post(basePath, actions.validateBodyInput, users.v1.createUser);
    app.put(basePath+'/:id', actions.validateId, actions.validateBodyInput, users.v1.updateUser);
    app.delete(basePath+'/:id', actions.validateId, users.v1.deleteUser);
};
