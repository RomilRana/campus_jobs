'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'student_id',
        as: 'user',
      });
    }
  }
  preference.init({
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job_type: {
      type: DataTypes.ENUM({ values: ['part-time', 'full-time'] }),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'preference',
  });
  return preference;
};