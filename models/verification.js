'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.qualification, {
        foreignKey: 'qualification_id',
        as: 'qualificationInfo',
      });
      this.belongsTo(models.User,{
        foreignKey:'college_id',
        as:'collegeInfo',
      });
      this.belongsTo(models.User,{
        foreignKey:'student_id',
        as:'studentInfo',
      });
      this.belongsTo(models.course,{
        foreignKey:'cource_id',
        as:'course_name'
      });
    }
  }
  verification.init({
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM({ values: ['pending', 'approved', 'rejected'] }),
      defaultValue: 'pending',
      allowNull: false,
    },
    college_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cource_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qualification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'verification',
  });
  return verification;
};