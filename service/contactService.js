const { Contact_info } = require('../models');

let createcontact = async (param) => {
    let data = await Contact_info.create(param);
    return data;
}

let findallcontact = async (limit,skip) => {
    let data = await Contact_info.findAll({ limit:limit,offset:skip, attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return data;
}

let findonecontact = async (id) => {
    let data = await Contact_info.findOne({where : {user_id:id}});
   return data;
}

let deleteone = async (id) => {
    let data = await Contact_info.destroy({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { id } });
    return data;
}

module.exports = {
    createcontact,
    findallcontact,
    findonecontact,
    deleteone,
}