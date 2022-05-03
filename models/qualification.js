'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class qualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here   
      this.belongsTo(models.User, {
        foreignKey: 'student_id',
        as: 'studentInfo',
      });
    }
  }
  qualification.init({
    gpa: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    main_subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backlogs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cource_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    college_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'qualification',
  });
  return qualification;
};