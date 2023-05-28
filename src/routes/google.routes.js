const {Router} = require('express');
const router = Router();


const {obtenerDatosOne} = require('../controllers/google.controller');
const {obtenerDatosTwo} = require('../controllers/google.controller');

router.get('/', obtenerDatosOne);
router.get('/ocupacion', obtenerDatosTwo);


module.exports = router;