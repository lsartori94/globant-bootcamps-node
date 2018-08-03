
module.exports =  asyncExampleFunction = (boolValue, cb) => {
  setTimeout(function() {
    cb(boolValue ? "You are lucky" : "Oh! man")
  }, 0);
};
