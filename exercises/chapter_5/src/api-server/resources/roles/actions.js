const _ =require('lodash');

module.exports={
    rolById: rolById
}
function rolById(roles,id) {
    var role= _.find(roles, function(u){return u.id ==id });
    if(role){
        return role;
    }else{
        return "role doesn't exists"
    }
   
}