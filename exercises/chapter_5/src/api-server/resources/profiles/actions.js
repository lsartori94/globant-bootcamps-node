const profilesMock = require('../../../test-helpers/profiles');
var _ = require('lodash');




function actionGetOneById(id){
var profiles=profilesMock.ALL_PROFILES;

const result =  _.find(profiles, function(o){
       
    return o.id ===id;

});
//puede logear undefined
console.log(result);// devuelve lo encontrado en consola
return result;


}

module.exports={
    actionGetOneById:actionGetOneById
}