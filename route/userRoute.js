const { addUser, login, getRole, findAll, findOne,logoutuser,deleteOne, updateOne, findcontactinfo, uploadone, findCourcebyid, getindex, findStudentInfo,findCollegeList,findEmployerList, findStudentList } = require('../controller/userController');
const router = require('express').Router();
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');
const { validateUser } = require('../middelware/validation/user');
const { cookieJwtAuth } = require('../middelware/cookieJwtAuth');
const { pagination } = require('../middelware/pagination');

router.post('/registerUser', uploadone,validateUser,addUser);
router.post('/loginUser', login);

router.delete('/delete/:id', deleteOne);

router.get('/index', getindex);

router.use(authenticateToken);
router.get('/findconatactinfo', findcontactinfo);
router.get('/logout',logoutuser);
router.get('/find',pagination ,findAll);   
router.get('/findone', findOne);
router.post('/getrole',getRole);
router.put('/update',uploadone,updateOne);
router.get('/findcouce', checkRole('college'), findCourcebyid);
router.get('/findstudent', findStudentInfo);
router.get('/findstudentlist', findStudentList);
router.get('/findcollegelist', findCollegeList);
router.get('/findemployerlist', findEmployerList);

module.exports = router;