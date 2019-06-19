const models = require("../../models");

module.exports = {
  getAllProfiles: getAllProm,
  getProfileById: getProfileByIdProm,
  createProfile: createProfileProm,
  modifyProfile: modifyProfileProm,
  deleteProfile: deleteProfileProm,
  addUsers: addUsersProm
};

function getAllProm() {
  return models.Profile.findAll({
    include: [
      {
        model: models.User,
        attributes: { exclude: ["id"] }
      }
    ],
    attributes: { exclude: ["id"] }
  });
}

function getProfileByIdProm({ id }) {
  return models.Profile.findByPk(
    id,
    {
      include: [
        {
          model: models.User,
          attributes: { exclude: ["id"] }
        }
      ]
    },
    { attributes: { exclude: ["id"] } }
  );
}

function createProfileProm({ body }) {
  return models.Profile.create(body);
}

function modifyProfileProm(req) {
  return models.Profile.update(req.body, { where: { id: req.params.id } });
}

function deleteProfileProm({ id }) {
  return models.Profile.destroy({ where: { id } });
}

function addUsersProm(req) {
  return models.Profile.update(req.body.Users, {
    where: { id: req.params.id }
  });
}
