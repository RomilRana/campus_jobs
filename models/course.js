'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'college_id',
        as: 'college_cource',
      });
      this.hasMany(models.verification,{
        foreignKey:'cource_id',
        as:'verification_name',
      })
    }
  }
  course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    college_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};