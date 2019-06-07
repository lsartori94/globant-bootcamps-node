function chapter2(param1){
    var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();
console.log("hola "+ param1+' La fecha de hoy es: '+ dd +'/' +mm+'/' +yyyy );
};

chapter2('Juan');