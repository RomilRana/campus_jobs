'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here

      //user to contact_info (all)
      this.hasMany(models.Contact_info, {
        foreignKey: 'user_id',
        as: 'contact_info',
      });

      //user to job (for only employer)
      this.hasMany(models.job, {
        foreignKey: 'employer_id',
        as: 'job',
      });

      //user to preferance (for only student-prefrences)
      this.hasMany(models.preference, {
        foreignKey: 'student_id',
        as: 'preference',
      });
      //user to course (only for college)
      this.hasMany(models.course, {
        foreignKey: 'college_id',
        as: 'course',
      });

      this.hasOne(models.qualification, {
        foreignKey: 'student_id',
        as: 'qulificationInfo',
      });

      this.hasMany(models.verification,{
        foreignKey:'college_id',
        as:'collegeRole',
      });
      this.hasMany(models.verification,{
        foreignKey:'student_id',
        as:'studentgeRole',
      });
      this.hasMany(models.list,{
        foreignKey:'student_id',
        as:'list_of_student',
      });
      this.hasMany(models.list,{
        foreignKey:'ByAction',
        as:'employer',
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM({ values: ['admin', 'employer', 'college', 'student'] }),
      allowNull: false,
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};