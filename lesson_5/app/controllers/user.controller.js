var User = require('../models/User');

exports.create = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  });

  newUser.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the User."
      });
  });
};

exports.findAll = (req, res) => {
  User.find()
  .then(users => {
    res.send(users);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."
    });
  });
};

exports.findOne = (req, res) => {
  User.findById(req.params.userId)
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });            
    }
    res.send(user);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });                
    }
    return res.status(500).send({
      message: "Error retrieving User with id " + req.params.userId
    });
  });
};

exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.userId, {
    name: req.body.name,
    username: req.body.username
  }, { new: true })
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });
    }
    res.send(user);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });                
    }
    return res.status(500).send({
      message: "Error updating User with id " + req.params.userId
    });
  });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });
    }
    res.send({message: "User deleted successfully!"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });                
    }
    return res.status(500).send({
      message: "Could not delete User with id " + req.params.userId
    });
  });
};