const { addList, showList, updateList, updateListByStudent, checkList,Confirm,OneApprove } = require('../controller/listController');
const router = require('express').Router();
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');

router.use(authenticateToken);
router.get('/show', showList);
router.post('/createList', addList);
router.put('/updatestatus', checkRole('employer'), updateList);
router.put('/updatebystudent', checkRole('student'), updateListByStudent);
router.get('/check',checkRole('student'),checkList);
router.get('/confirm',Confirm);
router.get('/one',OneApprove)

module.exports = router;