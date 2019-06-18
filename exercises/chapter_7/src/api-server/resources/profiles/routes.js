const config = require ('../../core/config');
const profiles = require('./controllers');
const actions=require('./actions');

module.exports= function initRoutes(app){
    // Profiles resource base route
    const basePath = config.basePath + '/profiles';
    app.get(basePath,profiles.v1.getAll);
    app.get(basePath+'/:id', actions.validateId, profiles.v1.getById);
    app.post(basePath+'/:id/users',actions.validateId, profiles.v1.assignUsers);///falta validacion del body input
    app.post(basePath, actions.validateBodyInput, profiles.v1.createProfile);
    app.put(basePath+'/:id',actions.validateId, actions.validateBodyInput, profiles.v1.updateProfile);
    app.delete(basePath+'/:id',actions.validateId, profiles.v1.deleteProfile);

};