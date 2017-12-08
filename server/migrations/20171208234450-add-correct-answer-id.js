'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Questions', 'correctAnswerId', {
      allowNull: true,
      type: Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Questions', 'correctAnswerId');
  }
};