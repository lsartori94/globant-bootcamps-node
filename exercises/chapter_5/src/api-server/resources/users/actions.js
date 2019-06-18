const _ = require('lodash');
const userMock = require('../../test-helpers/users');

module.exports = {
    getById,
    getUsers
}

function getUsers() {
    return userMock.ALL_USERS;
}

function getById(id) {
    return _.find(userMock.ALL_USERS, function(user){
        if (user.id=id){
            return user;
        }
    })
}
    

