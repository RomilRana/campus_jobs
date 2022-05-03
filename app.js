require("dotenv").config();

const express = require('express');
const app = express();

const {isStudent, isCollege, isEmployeer, isAdmin, isEmployeeOrCollege, isStudentOrCollege, isStudentOrEmployee, isStudentOrEmployeeOrCollege}  = require("./middelware/checkRoleWiseRoute");

const { sequelize, User } = require('./models');

app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use('/uploads', express.static('./uploads'));

const userroute = require('./route/userRoute');
app.use('/user', userroute);

const contactroute = require('./route/contactRoute');
app.use('/contact_info', contactroute);

const jobroute = require('./route/jobRoute');
app.use('/job', jobroute);

const qulificationroute = require('./route/qualificationRoute');
app.use('/qulification', qulificationroute);

const preferenceroute = require('./route/preferenceRoute');
app.use('/preference', preferenceroute);

const courceroute = require('./route/courseRoute');
app.use('/cource', courceroute);

const verifiactionroute = require('./route/verificationRoutes');
app.use('/verification', verifiactionroute);

const listroute = require('./route/listRoute');
app.use('/list', listroute)

console.log("-------------------");

app.get('/',(req,res) => {
    res.render('index');
});
app.get('/login',(req,res) => {
    res.render('login');
});
app.get('/register',(req,res) => {
    res.render('register');
});
app.get('/contact_info',(req,res) => {
    res.render('contact_info',{cookie : req.cookies});
});
app.get('/profile',(req,res) => {
    res.render('profile');
});
app.get('/update_profile',(req,res) => {
    res.render('update_profile');
});
app.get('/show_contact',(req,res) => {
    res.render('show_contact');
});
app.get('/logout',(req,res) => {
    res.render('logout');
});
//---------------------------------------------

// app.use(isStudent);

app.get('/preference', isStudent ,(req,res) => {
    res.render('preference');
});
app.get('/qualification', isStudent ,(req,res) => {
    res.render('qualification');
});

app.get('/find_jobs', isStudent ,(req,res) => {
    res.render('find_jobs');
});
app.get('/show_all_jobs', isStudent ,(req,res) => {
    res.render('show_all_jobs');
});
app.get('/one_qualification', isStudent ,(req,res) => {
    res.render('one_qualification');
});
app.get('/one_preference', isStudent ,(req,res) => {
    res.render('one_preference');
});
app.get('/one_list', isStudent ,(req,res) => {
    res.render('one_list');
});
app.get('/pendding_status_student',isStudent,(req,res) => {
    res.render('pendding_status_student');
});
app.get('/confirm_job',isStudent,(req,res) => {
    res.render('confirm_job');
});
//-----------------------------------------------------------

// app.use(isEmployeer);

app.get('/job', isEmployeer, (req,res) => {
    res.render('job');
});
app.get('/one_job',isEmployeer,(req,res) => {
    res.render('one_job');
});
app.get('/list_of_applicant',isEmployeer,(req,res) => {
    res.render('list_of_applicant');
})

//-----------------------------------------------------------
// app.use(isCollege);

app.get('/course',isCollege,(req,res) => {
    res.render('course');
});
app.get('/find_All_cource',isCollege,(req,res) => {
    res.render('find_All_cource');
});
app.get('/allstudent', isCollege ,(req,res) => {
    res.render('allstudent');
});


//-----------------------------------------------------------
// app.use(isAdmin);

app.get('/show_users',isAdmin,(req,res) => {
    res.render('show_users');
});

// app.use(isStudentOrCollege);

app.get('/show_pending_verification',isStudentOrCollege, (req,res) => {
    res.render('show_pending_verification');
});






app.listen({ port: 8080 }, async () => {
    console.log('server starting');
    await sequelize.authenticate();
    console.log('database connected');
});