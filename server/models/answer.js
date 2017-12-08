'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('Answer', {
    title: DataTypes.STRING,
    questionId: DataTypes.INTEGER
  });
  Answer.associate = function(models) {
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId',
    });
  };
  return Answer;
};