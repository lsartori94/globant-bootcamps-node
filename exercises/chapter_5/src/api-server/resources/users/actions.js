const _ =require('lodash');

module.exports={
    userById: userById
}
function userById(users,id) {
    var user= _.find(users, function(u){return u.id ==id });
    if(user){
        return user;
    }else{
        return "user doesn't exists"
    }
   
}