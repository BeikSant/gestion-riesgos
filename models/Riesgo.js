const mongoose = require('mongoose');
const { Schema } = mongoose;

const riesgoSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    habilidad: {
        type: 'string',
        required: true
    },
    motivo: {
        type: 'string',
        required: true
    },
    oportunidad: {
        type: 'string',
        required: true
    },
    tamannio: {
        type: 'string',
        required: true
    },
    descubrimiento: {
        type: 'string',
        required: true
    },
    explotacion: {
        type: 'string',
        required: true
    },
    conciencia: {
        type: 'string',
        required: true
    },
    deteccion: {
        type: 'string',
        required: true
    },
    confidencialidad: {
        type: 'string',
        required: true
    },
    integridad: {
        type: 'string',
        required: true
    },
    disponibilidad: {
        type: 'string',
        required: true
    },
    responsabilidad: {
        type: 'string',
        required: true
    },
    financiero: {
        type: 'string',
        required: true
    },
    reputacion: {
        type: 'string',
        required: true
    },
    cumplimiento: {
        type: 'string',
        required: true
    },
    privacidad: {
        type: 'string',
        required: true
    },
})

const Riesgo = mongoose.model('Riesgo', riesgoSchema);
module.exports = Riesgo;