const { sendMail } = require('../helper/sendMail');
const { createlist, showlist, updatestatus, updatelistbystudent, checkliststudent,confirm,oneapprove} = require('../service/listService');

const addList = async (req, res) => {
    const { job_id, ByAction,status } = req.body;
    let student_id = req.user.id;
    const param = {
        job_id,
        student_id,
        ByAction,
        status,
    }
    const insertdata = await createlist(param);
    res.json({ message: "request inserted" });
}

const showList = async (req, res) => { 
    const list = await showlist();
    res.status(200).json(list);
}

const updateList = async (req, res) => {
    let status = req.body.status;
    let ByAction = req.user.id;
    let id = req.body.job_id;
    let student_id = req.body.student_id;
    let param = {
        status,
        ByAction,
        student_id,
    }
    let verfication = await updatestatus(param, id,student_id);
    console.log(verfication);
    res.status(200).send({ message: "status updated",verfication});
}

const updateListByStudent = async (req, res) => {
    let statusByStudent = req.body.status;
    let sid = req.user.id;
    let id =  req.body.job_id;
    let param = {
        statusByStudent,
    }
    let verification = await updatelistbystudent(param, id, sid);
    res.status(200).send({ message: "status updated" });
}

const checkList = async (req, res) => {
    let sid = req.user.id;
    let list = await checkliststudent(sid);
    res.status(500).json(list);
}

const Confirm = async(req,res) => {
    let sid = req.user.id;
    let list = await confirm(sid);
    res.status(500).json(list);
}

const OneApprove = async(req,res) => {
    let sid = req.user.id;
    let list = await oneapprove(sid);
    res.status(200).json(list);
}

module.exports = {
    addList,
    showList,
    updateList,
    updateListByStudent,
    checkList,
    Confirm,
    OneApprove,
}