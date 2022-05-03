const { createjob, findalljobs, findonejob, deletejob,postedjob } = require('../service/jobService');

const addjob = async (req, res) => {
    try {
        console.log(req.user);
        const { name, profile, preference, package_info, salary_start, salary_end } = req.body;
        const employer_id = req.user.id;
        const param = {
            name,
            profile,
            preference,
            package_info,
            employer_id,
            salary_start,
            salary_end,
        }
        const insertdata = await createjob(param);
        res.json({ message: "job inserted" });
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

const findAllJob = async (req, res) => {
    let jobs = await findalljobs();
    res.status(200).json(jobs);
}

const findOneJob = async(req,res) => {
  
    let id = req.user.id;
    let job = await findonejob(id);
    res.status(200).json(job);
}

const deleteJob = async (req, res) => {
    let id = req.user.id;
    let job = await deletejob(id);
    res.status(500).json({ message: "job deleted.." });
}

const Postedjob = async (req,res) => {
    let id = req.user.id;
    let jobs = await postedjob(id);
    res.status(200).json(jobs);
}

module.exports = {
    addjob,
    findAllJob,
    findOneJob,
    deleteJob,
    Postedjob
}