const { qualification,User } = require('../models');

let addqualification = async (param) => {
    let data = await qualification.create(param);
    return data;
}

let showall = async () => {
    let data = await qualification.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include:[{
            model: User,
            as: 'studentInfo',
        }]
     });
    return data;
}

let showone = async (id) => {
    let data = await qualification.findOne({ 
        attributes: { exclude: ['createdAt', 'updatedAt'] }, 
        include:[{
            model: User,
            as: 'studentInfo',
        }],
        where: { student_id:id } });
    return data;
}

let deleteone = async (id) => {
    let data = await qualification.destroy({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { id } });
    return data;
}

module.exports = {
    addqualification,
    showall,
    showone,
    deleteone,
}