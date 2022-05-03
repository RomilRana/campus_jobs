const { course, User } = require('../models');

let createcourse = async (params) => {
    let data = course.create(params);
    return data;
}

let getallcourse = async () => {
    let data = course.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: User,
            as: 'college_cource',
        }]
    });
    return data;
}

let getonecourse = async (id) => {
    let data = course.findOne({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { college_id:id } });
    return data;
}

let getcourseforcollege = async (id) => {
    let data =  await course.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { college_id: id } });
    console.log(data);
    return data;
}

let deletecourse = async (id) => {
    let data = course.destroy({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { id } });
    return data;
}

module.exports = {
    createcourse,
    getallcourse,
    getonecourse,
    deletecourse,
    getcourseforcollege,
}