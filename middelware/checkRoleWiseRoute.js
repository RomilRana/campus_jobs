const jwt = require("jsonwebtoken");

const isEmployeer = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            console.log("'=============================================")
            if (req.user.role === "admin" || req.user.role === "employer") {
                console.log("ÖK")
                next();
            } else {
                return res.render('error');
            }
        });
    } catch (error) {
        return res.render('error');
    }
}


const isStudent = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            console.log(req.user.role);
            if (req.user.role === "admin" || req.user.role === "student") {
                next();
            } else {
                return res.render('error');
            }
        });
    } catch (error) {
        return res.render('error');
    }
}


const isCollege = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            if (req.user.role === "admin" || req.user.role === "college") {
                next();
            } else {
                return res.render('error');
            }
        });
    } catch (error) {
        return res.render('error');
    }
}

const isAdmin = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            if (req.user.role === "admin") {
                next();
            } else {
                return res.status(401).json({ message: "you must login with specific credetials" });
            }
        });
    } catch (error) {
        return res.status(401).json({ message: "you must login with specific credetials" });
    }
}

const isStudentOrEmployee = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            if (req.user.role === "student" || req.user.role === "employer" || req.user.role === "admin") {
                next();
            } else {
                return res.status(401).json({ message: "you must login with specific credetials" });
            }
        });
    } catch (error) {
        return res.status(401).json({ message: "you must login with specific credetials" });
    }
}

const isStudentOrCollege = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            if (req.user.role === "student" || req.user.role === "college" || req.user.role === "admin") {
                next();
            } else {
                return res.status(401).json({ message: "you must login with specific credetials" });
            }
        });
    } catch (error) {
        return res.status(401).json({ message: "you must login with specific credetials" });
    }
}

const isEmployeeOrCollege = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            if (req.user.role === "employer" || req.user.role === "college" || req.user.role === "admin") {
                next();
            } else {
                return res.status(401).json({ message: "you must login with specific credetials" });
            }
        });
    } catch (error) {
        return res.status(401).json({ message: "you must login with specific credetials" });
    }
}

const isStudentOrEmployeeOrCollege = function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).json({ message: "you must login with specific credetials" });

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            if (req.user.role === "student" || req.user.role === "employer" || req.user.role === "college" || req.user.role === "admin") {
                next();
            } else {
                return res.status(401).json({ message: "you must login with specific credetials" });
            }
        });
    } catch (error) {
        return res.status(401).json({ message: "you must login with specific credetials" });
    }
}


module.exports = {
    isEmployeer,
    isStudent,
    isCollege,
    isAdmin,
    isEmployeeOrCollege,
    isStudentOrCollege,
    isStudentOrEmployee,
    isStudentOrEmployeeOrCollege
}