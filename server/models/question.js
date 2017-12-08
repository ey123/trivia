'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    topicId: DataTypes.INTEGER
  });
  Question.associate = function(models) {
      Question.hasMany(models.Answer, {
        foreignKey: 'questionId',
        as: 'answers',
      });
      Question.belongsTo(models.Answer, {
        foreignKey: 'correctAnswerId',
        as: 'correctAnswer',
      });
  }
  return Question;
};