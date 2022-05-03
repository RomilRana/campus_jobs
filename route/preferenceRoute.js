const { addPref, findAllPreference, findOnePreference, deletPreference, updatePreference, findtechnologyprefrenceAND, findtechnologyOR, } = require('../controller/preferenceController');
const router = require('express').Router();
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');

router.get('/find', findAllPreference);

router.use(authenticateToken);
router.post('/addpreference',checkRole('student'), addPref);

router.get('/find', findOnePreference);
router.delete('/delete/:id', deletPreference);
router.put('/update/:id', updatePreference);
router.get('/findtechnology', findtechnologyprefrenceAND);
router.get('/findbyor', findtechnologyOR);

module.exports = router;