const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'] != undefined ? req.headers['authorization'] : `Bearer ${req.headers.cookie.split("=")[1]}`;
        const token = authHeader.split(' ')[1];
        console.log(token);
        if (!token) return res.status(401).render({message:"you must login with specific credetials"});

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("authorization sucess");
            req.user = user;
            next();  
        });  
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({message:"you must login with specific credetials"});
    }
}

module.exports = {
    authenticateToken,
}