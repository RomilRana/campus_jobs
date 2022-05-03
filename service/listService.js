const { list, job, User } = require('../models');

let createlist = async (param) => {
    let data = await list.create(param);
    return data;
}

let showlist = async () => {
    let data = await list.findAll({
        include: [
            {
                model: job,
                as: 'jobs',
            },
            {
                model: User,
                as: 'student_info',
            }
        ],where: { status: 'pending' }
    });
    return data;
}

let updatestatus = async (param, id,sid) => {
    let data = await list.update(param, { where: { job_id: id ,student_id:sid} });
    return data;
}

let updatelistbystudent = async (param, id, sid) => {
    let data = await list.update(param, { where: { job_id: id ,student_id:sid } });
    return data;
}

let checkliststudent = async (id) => {
    let data = await list.findAll({
        include: [
            {
                model: job,
                as: 'jobs',
            },
            {
                model: User,
                as:'employer_list',
            }
        ], where: { student_id: id, status: 'pending' } });
    return data;
}

let confirm = async(id) => {
    let data = await list.findAll({ 
        include: [
            {
                model: job,
                as: 'jobs',
            },
            {
                model: User,
                as: 'student_info',
            },
            {
                model: User,
                as:'employer_list',
            }
        ],
        where : {status: 'accept' , statusByStudent:'accept'}
    })
    return data;
}

let oneapprove = async(id) => {
    let data = await list.findAll({
        include: [
            {
                model: job,
                as: 'jobs',
            },
            {
                model: User,
                as:'employer_list',
            }
        ],
         where : {status: 'accept', statusByStudent: null}});
   return data;
}

module.exports = {
    createlist,
    showlist,
    updatestatus,
    updatelistbystudent,
    checkliststudent,
   confirm,
    oneapprove
}