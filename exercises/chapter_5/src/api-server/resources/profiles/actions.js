const _ =require('lodash');

module.exports={
    profileById: profileById
}
function profileById(profiles,id) {
    var profile= _.find(profiles, function(u){return u.id ==id });
    if(profile){
        return profile;
    }else{
        return "profile doesn't exists"
    }
   
}