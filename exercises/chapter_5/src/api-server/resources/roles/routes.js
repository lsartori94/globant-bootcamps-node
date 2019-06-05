const config = require ('../../core/config');
const roles = require('./controllers');
module.exports= function initRoutes(app){
    // Profiles resource base route
    const basePath = config.basePath + '/roles';
    app.get(basePath,roles.v1.getAll);
    app.get(basePath+'/:id',roles.v1.getById);
};