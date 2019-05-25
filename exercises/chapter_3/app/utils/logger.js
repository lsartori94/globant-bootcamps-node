exports.logger = function(msg) {
  return msg.concat(` --> ${new Date().toDateString()}\n`);
};
