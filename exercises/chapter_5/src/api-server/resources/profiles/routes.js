const config = require ('../../core/config');
const profiles = require('./controllers');
module.exports= function initRoutes(app){
    // Profiles resource base route
    const basePath = config.basePath + '/profiles';
    app.get(basePath,profiles.v1.getAll);
    app.get(basePath+'/:id',profiles.v1.getById);
};