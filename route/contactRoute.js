const { addContact, findAllContact, findOneContact, deleteOneContact } = require('../controller/contactController');
const router = require('express').Router();
const { checkRole } = require('../middelware/role');
const { cookieJwtAuth } = require('../middelware/cookieJwtAuth');
const { pagination } = require('../middelware/pagination');
const { authenticateToken } = require('../authentication/jwt_token');

router.use(authenticateToken);
router.post('/createContact', addContact);
router.get('/find', pagination, findAllContact);
router.get('/findOne', findOneContact);
router.delete('/delete/:id', deleteOneContact);

module.exports = router;