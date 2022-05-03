const { addQualification, showAllQualifiction, showOneQualification, deleteOneQualification } = require('../controller/qualificationController');
const { authenticateToken } = require('../authentication/jwt_token');
const { checkRole } = require('../middelware/role');
const router = require('express').Router();

router.get('/showall', showAllQualifiction);

router.use(authenticateToken);
router.post('/addqulification', checkRole('student'), addQualification);
router.get('/show', showOneQualification);
router.delete('/delete/:id', deleteOneQualification);

module.exports = router;