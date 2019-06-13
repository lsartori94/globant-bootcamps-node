"use strict";
const profilesMock = require('../../../test-helpers/profiles');
var _ = require('lodash');
const Joi = require("joi");



module.exports= {
    actionGetOneById:actionGetOneById,
}


function actionGetOneById(id) {
const profiles=profilesMock.ALL_PROFILES;

const result =  _.find(profiles, function(o) {
       
    return o.id === id;

});
//puede logear undefined
console.log(result);// devuelve lo encontrado en consola
return result;


}




