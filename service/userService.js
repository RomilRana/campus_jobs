const { User, Contact_info, course, qualification } = require('../models');

let createUser = async (info) => {
    const data = await User.create(info);
    return data;
}

let loginUser = async (params) => {
    let data = await User.findOne({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { email: params.email } })
    return data;
}

let findAllUser = async (limit,skip) => {
    const data = await User.findAll({ limit:limit,offset:skip});
    return data;
}

let findOneUser = async (id) => {
    const data = await User.findOne({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { id } });
    return data;
}

let deleteUser = async (id) => {
    const data = await User.destroy({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { id } });
    return data;
}

let updateUser = async (id, params) => {
    const data = await User.update(params, { where: { id }, attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return data;
}

let findstudentlist = async (user_id) => {
    const data = await qualification.findAll({ where: { role: 'student', id:user_id } });
    return data;
}

let findcollegelist = async () => {
    const data = await User.findAll({ where: { role: 'college' } });
    return data;
}
let findemployerlist = async () => {
    const data = await User.findAll({ where: { role: 'employer' } });
    return data;
}

let getcontact_info = async (id) => {
    const data = await User.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: Contact_info,
            as: 'contact_info',
        }],
        where: { id }
    });
    return data;
}

let findcourcebyid = async (id) => {
    const data = await User.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: course,
            as: 'course',
        }],
        where: { id }
    });
    return data;
}

let findstudent = async () => {
    const data = await User.findAll({
        include: [{
            model: qualification,
            as: 'qulificationInfo',
        }],
        where: { id: 1 }
    });
    return data;
}

module.exports = {
    createUser,
    loginUser,
    findAllUser,
    findOneUser,
    deleteUser,
    updateUser,
    getcontact_info,
    findcourcebyid,
    findstudent,
    findstudentlist,
    findcollegelist,
    findemployerlist,
}