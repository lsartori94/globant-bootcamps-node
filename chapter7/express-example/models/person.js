'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('person', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.STRING,
  });
  
  Person.associate = function(models) {
    models.person.belongsToMany(models.project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'personId', otherKey: 'projectId'});
  }
    
  
  return Person;
};