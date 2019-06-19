const models = require("../../models");

module.exports = {
  getAllUsers: getAllUsersProm,
  getUserById: getUserByIdProm,
  createUser: createUserProm,
  modifyUser: modifyUserProm,
  deleteUser: deleteUserProm
};

function getAllUsersProm() {
  return models.User.findAll({
    include: [
      {
        model: models.Profile,
        attributes: { exclude: ["id"] }
      }
    ],
    attributes: {
      exclude: ["password", "id", "ProfileId"]
    }
  });
}

function getUserByIdProm({ id }) {
  return models.User.findByPk(id, {
    include: [
      {
        model: models.Profile,
        attributes: { exclude: ["id"] }
      }
    ],
    attributes: {
      exclude: ["password", "ProfileId", "id"]
    }
  });
}

function createUserProm({ body }) {
  return models.User.create(body);
}

function modifyUserProm(req) {
  return models.User.update(req.body, { where: { id: req.params.id } });
}

function deleteUserProm({ id }) {
  return models.User.destroy({ where: { id } });
}
