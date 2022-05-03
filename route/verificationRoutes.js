const { findverificationPannding, updateVerification, findAllStudent,findStudentPendding } = require('../controller/verificationController');
const router = require('express').Router();
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');

router.use(authenticateToken);
router.get('/findpending',findverificationPannding);
router.put('/updatestatus', checkRole('college'), updateVerification);
router.get('/finndstudent', findAllStudent);
router.get('/finndpendingstudent', findStudentPendding);        

module.exports = router;