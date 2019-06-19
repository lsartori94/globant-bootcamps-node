const models = require("../../models");

module.exports = {
  getAllRoles: getAllRolesProm,
  getRoleById: getRoleByIdProm,
  createRole: createRoleProm,
  modifyRole: modifyRoleProm,
  deleteRole: deleteRoleProm
};

function getAllRolesProm() {
  return models.Role.findAll({
    attributes: {
      exclude: ["id"]
    }
  });
}

function getRoleByIdProm({ id }) {
  return models.Role.findByPk(id, {
    attributes: {
      exclude: ["id"]
    }
  });
}

function createRoleProm({ body }) {
  return models.Role.create(body);
}

function modifyRoleProm(req) {
  return models.Role.update(req.body, { where: { id: req.params.id } });
}

function deleteRoleProm({ id }) {
  return models.Role.destroy({ where: { id } });
}
