'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'band',
      'recommendation',
      { type: DataTypes.STRING }
    )
  },
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'band',
      'reccomendation'
    )
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
