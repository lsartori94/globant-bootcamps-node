function objectToJSON(object){
  keys = [] 
   for (var k in object) {
      if (object.hasOwnProperty(k)) {
        keys.push(k)
      }
    }

      newObj = {}
    for(var i = 0; i < keys.length; i++){
      newObj[keys[i]] = object[keys[i]]
      // console.log(object[keys[0]])
    }
    jsonObj = JSON.parse(JSON.stringify(newObj))
  return jsonObj
}

module.exports = objectToJSON;
