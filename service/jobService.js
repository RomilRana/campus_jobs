const { job,User} = require('../models');

let createjob = async (param) => {
    console.log("in");
    let data = await job.create(param);
    return data;
}

let findalljobs = async () => {
    let data = await job.findAll({ 
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: User,
            as: 'user',
        }]
    });
    return data;
}

let findonejob = async (id) => {
    let data = await job.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: User,
            as: 'user',
        }],
     where : {employer_id : id}
    });
    return data;
}

let deletejob = async (id) => {
    let data = await job.destroy({ attributes: { exclude: ['createdAt', 'updatedAt'] }, where: { employer_id : id } });
    return data;
}

let postedjob = async (id) => {
    let data = await job.findAll({
        include: [{
            model: User,
            as: 'user',
        }],
        where : { employer_id:id }});
    return data;;
}

module.exports = {
    createjob,
    findalljobs,
    findonejob,
    deletejob,
    postedjob,
}