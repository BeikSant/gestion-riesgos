const express = require('express');
const { leerRiesgos, presentarFormRiesgo, calcularRiesgo, guardarRiesgo, verRiesgo } = require('../controllers/main.controller');
const router = express.Router();

router.get('/', leerRiesgos);

router.get('/agregar', presentarFormRiesgo);

router.post('/calcular', calcularRiesgo);

router.post('/guardar', guardarRiesgo);

router.get('/ver/:id', verRiesgo);

module.exports = router;