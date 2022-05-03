let { findverification, updateverification, findallstudent,findstudentpennding } = require('../service/verificationServices');

const findverificationPannding = async (req, res) => {
    let cid = req.user.id;
    let data = await findverification(cid);
    if (data.length <= 0) {
        res.status(200).send({ message: "no data foud" });
    }
    else {
        res.status(200).send(data);
    }
}

const updateVerification = async (req, res) => {
    let clg_id = req.user.id;
    let sid = req.body.student_id;
    let data = req.body;
    let veri = await updateverification(clg_id, sid, data);
    res.status(200).send({ message: "status updated" });
}

const findAllStudent = async (req, res) => {
    let id = req.user.id;
    let studentslist = await findallstudent(id);
    res.status(200).send(studentslist);
}

const findStudentPendding = async (req, res) => {
    let id = req.user.id;
    let studentslist = await findstudentpennding(id);
    res.status(200).send(studentslist);
}

module.exports = {
    findverificationPannding,
    updateVerification,
    findAllStudent,
    findStudentPendding,
}