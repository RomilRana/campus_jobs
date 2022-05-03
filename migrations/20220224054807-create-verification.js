'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('verifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      status : {
        type: Sequelize.ENUM({ values: ['pending','approved','rejected'] }),
        allowNull: false,
      },
      college_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      student_id : {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      cource_id : {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('verifications');
  }
};