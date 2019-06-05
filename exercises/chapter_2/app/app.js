const argv =require("yargs").argv;


function passer(){
 let param= argv.msg;
 logger(param);
}
function logger(p){
fecha= new Date();
console.log(p+" "+fecha);


}

passer();
