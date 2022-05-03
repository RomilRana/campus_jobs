'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'employer_id',
        as: 'user',
      });
      this.hasMany(models.list, {
        foreignKey: 'job_id',
        as: 'list',
      });
    }
  }
  job.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    package_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary_start: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salary_end: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};