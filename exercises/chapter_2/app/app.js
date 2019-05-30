const logger=require('./utils/logger');
const uuidv1 = require('uuid/v1')

parser();
/**
 * This function parser the parameters
 * and send them to the logger
 */
function parser(){
  var parsed = require('minimist')(process.argv.slice(2));
  var uuid1 = uuidv1();
  logger.logger(parsed,uuid1);
}