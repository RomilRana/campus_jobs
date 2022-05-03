const { Op } = require('sequelize');
const { preference,User } = require('../models');

let addpreference = async (param) => {
    let data = await preference.create(param);
    return data;
}

let findallpreference = async () => {
    let data = await preference.findAll({ 
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include:[{
            model: User,
            as: 'user',
        }]
    });
    return data;
}

let findonepreference = async (id) => {
    let data = await preference.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] }, 
        include:[{
            model: User,
            as: 'user',
        }],
        where: { student_id:id } });
    return data;
}

let deletpreference = async (id) => {
    let data = await preference.destroy({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { id } });
    return data;
}

let updatepreference = async (id, param) => {
    let data = await preference.update(param, { where: { id }, attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return data;
}

let findtechnology = async (params) => {
    let data = await preference.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: params,
    });
    console.log(data);
    return data;
}

let findtechnologyOr = async (params) => {
    let data = await preference.findAll({
        where: {
            [Op.or]: params,
        },
    });
    return data;
}

module.exports = {
    addpreference,
    findallpreference,
    findonepreference,
    deletpreference,
    updatepreference,
    findtechnology,
    findtechnologyOr,
}