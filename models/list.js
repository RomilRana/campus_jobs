'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.job, {
        foreignKey: 'job_id',
        as: 'jobs',
      });
      this.belongsTo(models.User,{
        foreignKey: 'student_id',
        as: 'student_info',
      });
      this.belongsTo(models.User,{
        foreignKey:'ByAction',
        as:'employer_list',
      });
    }
  }
  list.init({
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM({ values: ['accept', 'reject', 'pending'] }),
      allowNull: false,
    },
    ByAction: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    statusByStudent: {
      type: DataTypes.ENUM({ values: ['accept', 'reject'] }),
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'list',
  });
  return list;
};