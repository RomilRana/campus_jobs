'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      technology: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      salary :{
        type: Sequelize.STRING,
        allowNull:false,
      },
      location:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      ctc : {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      job_type:{
        type: Sequelize.ENUM({ values: ['part-time', 'full-time'] }),
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
    await queryInterface.dropTable('preferences');
  }
};