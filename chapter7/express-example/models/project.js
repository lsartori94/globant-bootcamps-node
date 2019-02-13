'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('project', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
  });

  Project.associate = function (models) {
    models.project.belongsToMany(models.person, { as: 'Workers', through: 'worker_tasks', foreignKey: 'projectId', otherKey: 'personId'});
  }

  return Project;
};