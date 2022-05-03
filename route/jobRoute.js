const { addjob, findAllJob, findOneJob, deleteJob,Postedjob } = require('../controller/jobController');
const router = require('express').Router();
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');
const {checkdata} = require('../middelware/data');
const {cookieJwtAuth} = require('../middelware/cookieJwtAuth');

router.use(authenticateToken);
router.post('/addjob',checkRole('employer'), addjob);
router.get('/find',findAllJob);
router.get('/findjob',findOneJob);
router.delete('/delete/:id', deleteJob);
router.get('/posted',Postedjob);
module.exports = router;