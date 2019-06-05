const argv =require("yargs").argv;
const generateUuid =require ('generate-uuid');  
const logger= require("./logger.js");
const uuid = generateUuid();
function passer(){
 let param= argv.msg;
 logger.log(param,uuid);
}





passer();