const userMock = require('../../../test-helpers/users');
var _ = require('lodash');



  function actionFindById(idParametro) {
    var users = userMock.ALL_USERS;

    //_.find(users, function(o) { return o.age < 40; });
    //_.findIndex(users, function(o) { return o.user == 'barney'; });
    const result =  _.find(users, function(o){
       
        return o.id === idParametro;
       
    });

     console.log(result);//puede logear undefined
    return result;

}

module.exports= {
    actionFindById:actionFindById,
}

//actionFindById(2);