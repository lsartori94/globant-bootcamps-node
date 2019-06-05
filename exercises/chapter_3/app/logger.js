const fs= require("fs");
var logg={
    "sessionId": " "    ,
    "msg": ""
}
module.exports.log = function logger(param,sessionId){
    fecha= new Date();
    //msg=("sessionId: "+ sessionId + "\nmsg: "+ param +" "+ fecha);
    logg.sessionId= sessionId;
    logg.msg= param ;
    let exp =JSON.stringify(logg,null,"\t");
    fs.appendFile("log.json",exp,function(err){
        if(err) throw err;
        console.log("saved");
    })
}




