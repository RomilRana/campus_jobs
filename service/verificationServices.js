const { verification, qualification, User, course } = require('../models');

const addverification = async (params) => {
    let data = await verification.create(params);
    return data;
}

const findverification = async (id) => {
    let data = await verification.findAll({
        include: [{
            model: User,
            as: 'collegeInfo',
        },
        {
            model: User,
            as: 'studentInfo',
        },
        {
            model: qualification,
            as: 'qualificationInfo',
        },
        {
            model: course,
            as: 'course_name',
        }
        ],
        where: { college_id: id, status: 'pending' }
    });
    return data;
}

const updateverification = async (clgid, sid, params) => {
    let data = await verification.update(params, { where: { college_id: clgid, student_id: sid } });
    return data;
}

const findallstudent = async (id) => {
    let data = await qualification.findAll({ attributes: 'student_id', where: { college_id: id } });
    return data;
}
const findstudentpennding = async (id) => {
    let data = await verification.findAll({
        include: [{
            model: User,
            as: 'collegeInfo',
        },
        {
            model: course,
            as: 'course_name',
        }
        ],
        where: { student_id: id, status: 'pending' }
    });
    return data;
}

module.exports = {
    addverification,
    findverification,
    updateverification,
    findallstudent,
    findstudentpennding,
}