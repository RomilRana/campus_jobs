const { addcourse, findAllcourse, getOnecourse, deleteCourse,getcoursCollege,getcoursCollegeForStudent } = require('../controller/courseController');
const router = require('express').Router();
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');
const {cookieJwtAuth} = require('../middelware/cookieJwtAuth');

router.use(authenticateToken);
router.post('/addcource',checkRole('college'), addcourse);
router.get('/findcource',checkRole('college'),getcoursCollege);
router.post('/findcourceforstudent',checkRole('student'),getcoursCollegeForStudent);
router.get('/find', findAllcourse);
router.get('/findone', getOnecourse);
router.delete('/delete', deleteCourse);

module.exports = router;