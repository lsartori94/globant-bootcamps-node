exports.logger = function(msg, uuid) {
  return {
    sessionId: uuid,
    msg: `${msg} --> ${new Date().toDateString()}`
  };
};
