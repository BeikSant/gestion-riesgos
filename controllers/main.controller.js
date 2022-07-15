const Riesgo = require('../models/Riesgo');

const leerRiesgos = async (req, res) => {
    try {
        const riesgos = await Riesgo.find().lean();
        return res.render('home', { riesgos: riesgos });
    } catch (error) {
        console.log(error);
        return res.send("Error al buscar");
    }
}

const presentarFormRiesgo = (req, res) => {
    return res.render("crear");
}

const calcularRiesgo = (req, res) => {
    sumaAmenaza = Number(req.body.habilidad) + Number(req.body.motivo)
        + Number(req.body.oportunidad) + Number(req.body.tamannio);
    sumaVulnerabilidad = Number(req.body.descubrimiento) + Number(req.body.explotacion)
        + Number(req.body.conciencia) + Number(req.body.deteccion);
    probabilidad = (sumaAmenaza + sumaVulnerabilidad) / 8;
    sumaImpTecnico = Number(req.body.confidencialidad) + Number(req.body.integridad) + Number(req.body.disponibilidad) + Number(req.body.responsabilidad);
    sumaImpNegocio = Number(req.body.financiero) + Number(req.body.reputacion) + Number(req.body.cumplimiento) + Number(req.body.privacidad);
    impacto = (sumaImpTecnico + sumaImpNegocio) / 8;
    return res.render("calcular", { probabilidad: probabilidad, impacto: impacto, info: req.body });
}

const guardarRiesgo = async (req, res) => {
    try {
        const riesgo = new Riesgo(req.body);
        await riesgo.save();
        res.redirect('/');
    } catch (error) {
        return res.send("Error al guardar");
    }
}

const verRiesgo = async (req, res) => {
    try {
        const riesgo = await Riesgo.findOne({ _id: req.params.id }).lean();
        console.log(riesgo);
        sumaAmenaza = Number(riesgo.habilidad) + Number(riesgo.motivo)
            + Number(riesgo.oportunidad) + Number(riesgo.tamannio);
        sumaVulnerabilidad = Number(riesgo.descubrimiento) + Number(riesgo.explotacion)
            + Number(riesgo.conciencia) + Number(riesgo.deteccion);
        probabilidad = (sumaAmenaza + sumaVulnerabilidad) / 8;
        sumaImpTecnico = Number(riesgo.confidencialidad) + Number(riesgo.integridad) + Number(riesgo.disponibilidad) + Number(riesgo.responsabilidad);
        sumaImpNegocio = Number(riesgo.financiero) + Number(riesgo.reputacion) + Number(riesgo.cumplimiento) + Number(riesgo.privacidad);
        impacto = (sumaImpTecnico + sumaImpNegocio) / 8;
        return res.render('verRiesgo', { probabilidad: probabilidad, impacto: impacto, info: riesgo });

    } catch (error) {
        console.log(error);
        return res.send("Error al ver riesgo");
    }
}


module.exports = {
    leerRiesgos,
    presentarFormRiesgo,
    calcularRiesgo,
    guardarRiesgo,
    verRiesgo
}