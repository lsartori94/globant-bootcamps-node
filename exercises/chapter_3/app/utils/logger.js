exports.logger = function(msg, uuid) {
  return {
    UUID : uuid,
    message: `${msg} --> ${new Date().toDateString()}`
  };
};
