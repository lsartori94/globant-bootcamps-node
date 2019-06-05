const rolesMock= require ('../../../test-helpers/roles');
const joi= require('joi');
module.exports={
    validateId:validateId,
    validateIdExist:validateIdExist
}
//validate the id 
function validateId(req, res, next){
    const{id}=req.params;
    const schema=joi.object().keys({
        profileid:joi.number().integer().positive().required
    });
    joi.validate(id,schema, (error,value)=>{
    if(error){
        res.status(422).send({ message: "Invalid request!" });
    }else{
        next();
    }    
});
}

//validate if exists a rol with the id
function validateIdExist(req,res){
const{id}=req.params;
const rol= rolesMock.ALL_ROLES.filter(function(m){
    return m.id==id;
})[0];
if(!rol){
    res.status(404).send({ message: "Not found" });
}
else{
    res.status(200).send(rol);;
}
}