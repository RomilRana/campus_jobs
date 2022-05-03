const { addpreference, findallpreference, findonepreference, deletpreference, updatepreference, findtechnology, findtechnologyOr } = require('../service/preferenceService');
const { findstudentlist } = require('../service/userService');

const addPref = async (req, res) => {
    const { technology, salary, location, ctc, job_type } = req.body;
    let student_id = req.user.id;
    const params = {
        technology,
        salary,
        location,
        ctc,
        job_type,
        student_id,
    }
    qulification = await addpreference(params);
    res.status(200).json({ message: "prefrences inserted" });
}

const findAllPreference = async (req, res) => {
    let preferences = await findallpreference();
    res.status(200).json(preferences);
}

const findOnePreference = async (req, res) => {
    let id = req.user.id;
    let preferene = await findonepreference(id);
    res.status(200).send(preferene);
}

const deletPreference = async (req, res) => {
    let id = req.user.id;
    let preference = await deletpreference(id);
    res.status(200).send({ message: "preferences deleted" });
}

const updatePreference = async (req, res) => {
    let id = req.params.id;
    let data = req.params;
    let preference = await updatepreference(id, data);
    res.status(200).send(preference);
}

const findtechnologyprefrenceAND = async (req, res) => {
    let { technology, ctc, location } = req.query;
    let params = {};
    if (technology) {
        params['technology'] = technology;
    }
    if (ctc) {
        params['ctc'] = ctc;
    }
    if (location) {
        params['location'] = location;
    }
    let data = await findtechnology(params);
    res.status(200).send(data);
}

const findtechnologyOR = async (req, res) => {
    let { technology, ctc, location } = req.query;
    let params = {};
    if (technology) {
        params['technology'] = technology;
    }
    if (ctc) {
        params['ctc'] = ctc;
    }
    if (location) {
        params['location'] = location;
    }
    let size = Object.keys(params).length;
    console.log(params)
    console.log(size);
    if (size == 0) {
        let data = await findstudentlist();
        res.status(200).send(data);
    }
    else {
        let data = await findtechnologyOr(params);
        res.status(200).send(data);
    }
}

module.exports = {
    addPref,
    findAllPreference,
    findOnePreference,
    deletPreference,
    updatePreference,
    findtechnologyprefrenceAND,
    findtechnologyOR,
}