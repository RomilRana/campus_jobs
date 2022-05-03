const { createcourse, getallcourse, getonecourse, deletecourse, getcourseforcollege } = require('../service/courseService');

const addcourse = async (req, res) => {
    try {
        const { name, duration } = req.body;
        const college_id = req.user.id;
        const param = {
            name,
            college_id,
            duration,
        }
        const inserData = await createcourse(param);
        res.json({ message: "course inserted" });
    }
    catch(error)
    {
        res.json({ message: "error" });
        console.log(error);
    }
}

const findAllcourse = async (req, res) => {
    let data = await getallcourse();
    res.status(200).send(data);
}

const getOnecourse = async (req, res) => {
    let id = req.user.id;
    let data = await getonecourse(id);
    res.status(200).send(data);
}

const getcoursCollege = async (req,res) => {
    let cid = req.user.id; 
    let data = await getcourseforcollege(cid);
    res.status(200).send(data);
}

const getcoursCollegeForStudent = async (req,res) => {
    // console.log(req.body);
    let cid = req.user.id; 
    console.log(cid);
    let data = await getcourseforcollege(cid);
    res.status(200).send(data);
}

const deleteCourse = async (req, res) => {
    let id = req.user.id;
    let data = await deletecourse(id);
    res.status(200).send(data);
}

module.exports = {
    addcourse,
    findAllcourse,
    getOnecourse,
    deleteCourse,
    getcoursCollege,
    getcoursCollegeForStudent
}