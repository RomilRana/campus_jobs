const { addqualification, showall, showone, deleteone } = require('../service/qualificationService');
const { addverification } = require('../service/verificationServices');

const addQualification = async (req, res) => {
    try {
        const { gpa, main_subject, resume, backlogs, start_year, end_year, college_id, cource_id } = req.body;
        let student_id = req.user.id;
        const param = {
            gpa,
            main_subject,
            resume,
            backlogs,
            student_id,
            start_year,
            end_year,
            college_id,
            cource_id,
        }
        let qualification = await addqualification(param);
        if (qualification.length < 0) {
            res.status(200).json({ message: "qualification not insertrd" });
        }
        else {
            const { id, college_id, cource_id, student_id } = qualification.dataValues;
            const tempverification = { qualification_id: id, college_id: college_id, cource_id: cource_id, student_id: student_id, year: 123 };
            let verification = await addverification(tempverification);
            res.status(200).json({ message: "qualification inserted" });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const showAllQualifiction = async (req, res) => {
    let qualifications = await showall();
    res.status(500).send(qualifications);
}

const showOneQualification = async (req, res) => {
    let id = req.user.id;
    let qualification = await showone(id);
    res.status(200).json(qualification);
}

const deleteOneQualification = async (req, res) => {
    let id = req.user.id;
    let qualification = await deleteone(id);
    res.status(200).json({ message: "qualification deleted.." });
}

module.exports = {
    addQualification,
    showAllQualifiction,
    showOneQualification,
    deleteOneQualification,
}