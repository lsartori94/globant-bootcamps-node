const config = require ('../../core/config');
const roles = require('./controllers');
const actions=require('./actions');

module.exports= function initRoutes(app){
    // Profiles resource base route
    const basePath = config.basePath + '/roles';
    app.get(basePath,roles.v1.getAll);
    app.get(basePath+'/:id', actions.validateId,
     roles.v1.getById);
    app.post(basePath, actions.validateBodyInput, roles.v1.createRole);
    app.put(basePath+'/:id', actions.validateId, actions.validateBodyInput, roles.v1.updateRole);
    app.delete(basePath+'/:id',actions.validateId, roles.v1.deleteRole)
};
