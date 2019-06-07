const rolesMock = require('../../../test-helpers/roles');
var _ = require('lodash');



  function actionFindRolById(idParametro){
    var roles = rolesMock.ALL_ROLES;

    //_.find(users, function(o) { return o.age < 40; });
    //_.findIndex(users, function(o) { return o.user == 'barney'; });
    const result =  _.find(roles, function(o){
       
        return o.id ===idParametro;
       
    });
    //puede logear undefined
     console.log(result);// devuelve lo encontrado en consola 

    return result;

}

module.exports={
    actionFindRolById:actionFindRolById,
}