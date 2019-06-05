const usersMock= require ('../../../test-helpers/users');
const joi= require('joi');
module.exports={
    validateId:validateId,
    validateIdExist:validateIdExist
}
//validate the id 
function validateId(req,res,next){
    const schema=joi.object().keys({
        id:joi.number().integer().positive().required
    });
    joi.validate(id,schema, (error,value)=>{
    if(error){
        res.status(422).send({ message: "Invalid request!" });
    }else{
        next();
    }    
});
}

//validate if the id exists in the mock
function validateIdExist(req,res){
const{id}=req.params;
const user= usersMock.ALL_USERS.filter(function(m){
    return m.id==id;
})[0];
if(!user){
    res.status(404).send({ message: "Not found" });
}
else{
    res.status(200).send(user);
}
}