const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const { validationResult } = require('express-validator');
const { createUser, loginUser, findAllUser, findOneUser, deleteUser, updateUser, getcontact_info, findcourcebyid, findstudent, findstudentlist,findemployerlist,findcollegelist } = require('../service/userService');
const { User } = require('../models');
const { authenticateToken } = require('../authentication/jwt_token');
const cookieParser = require('cookie-parser');

const addUser = async (req, res) => {
    try {
        const info = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            profile_pic: req.file.path,
            status: req.body.status,
        }
        const insertData = await createUser(info);
        res.status(201).json({ message: "user inserted sucessfully" });
    }
    catch (error) {
        console.log("in catch",error);
        return res.status(500).json(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const params = {
        email,
        password,
    }
    const userByEmail = await loginUser(params);
    if (!userByEmail) {
        res.status(400).json({ message: "no email found !!!!" });
    }
    else if (userByEmail.password != password) {
        res.status(400).json({ message: "password doesnot match" });
    }
    else {
        const jwtToken = jwt.sign({ id: userByEmail.id, role: userByEmail.role }, process.env.SECRET);
       // res.status(202).json({ message: "Welcome Back", token: jwtToken });
         res.cookie("jwtToken",jwtToken,{
            httpOnly : true,
        });
        console.log(jwtToken);
         return res.redirect('/');
    }
}

const findAll = async (req, res) => {
    let {limit,page, skip, size} = req.pagination;
    let users = await findAllUser(limit,skip);
    size = users.length;
    if (!users) {
        res.status(404).send({ message: "no data found" });
    }
    else {
        res.status(200).send({
            page,
            size,
            data:users,
        });
    }
}

const findOne = async (req, res) => {
    let user_id = req.user.id;
    let user = await findOneUser(user_id);
    if (!user) {
        res.status(404).send({ message: "no data found" });
    }
    else {
        res.status(200).send(user);
    }
}

const deleteOne = async (req, res) => {
    let id = req.params.id;
    let user = await deleteUser(id);
    if (!user) {
        res.status(404).send({ message: "no data found" });
    }
    else {
        res.json({ message: "user deleted" });
    }
}

const updateOne = async (req, res) => {
    let user_id = req.user.id;
    const info = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        profile_pic: req.file.path,
        status: req.body.status,
    }
    let user = await updateUser(user_id, info);
    if (!user) {
        res.status(404).send({ message: "no data found" });
    }
    else {
        res.status(200).send({message: "user updated"});
    }
}

const findcontactinfo = async (req, res) => {
    let id = req.user.id;
    let data = await getcontact_info(id);
    res.status(200).send(data);
}

const findCourcebyid = async (req, res) => {
    let id = req.user.id;
    let data = await findcourcebyid(id);
    res.status(200).send(data);
}

const getindex = async (req, res) => {
    res.status(200).json({ message: "this is index page" });
}

const findStudentInfo = async (req, res) => {
    let data = await findstudent();
    res.status(200).send(data);
}

const findStudentList = async (req, res) => {
    let user_id = req.user.id;
    let data = await findstudentlist(user_id);
    res.status(200).send(data);
}

const findCollegeList = async (req, res) => {
    let data = await findcollegelist();
    res.status(200).send(data);
}
const findEmployerList = async (req, res) => {
    let data = await findemployerlist();
    res.status(200).send(data);
}

//upload files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadone = multer({
    storage: storage,
    limits: { fileSize: '5000000' },
    fileFilter: (req, file, cb) => {
        const fileType = /jpeg|jpg|png/;
        const mimeType = fileType.test(file.mimetype);
        const extname = fileType.test(path.extname(file.originalname));
        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Give proper file formate to upload');
    }
}).single('profile_pic');

const getRole = (req, res) => {
    let role = req.user.role;
    let name = req.user.name;
    return res.status(200).json({message:"welcome ",role});
}

const logoutuser = (req,res) => {
    res.clearCookie("jwtToken");
   return res.status(200).json({message:"cookie is clear"});
    //   return res.redirect('/login');
}

module.exports = {
    addUser,
    login,
    getRole,
    findAll,
    findOne,
    deleteOne,
    updateOne,
    findcontactinfo,
    uploadone,
    findCourcebyid,
    getindex,
    findStudentInfo,
    findStudentList,
    logoutuser,
    findCollegeList,
    findEmployerList,
}