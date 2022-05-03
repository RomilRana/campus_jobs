const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = function(req, res, next){
    let accessToken = req.cookies.jwtToken;
    console.log(accessToken);
    //if there is no token stored in cookies, the request is unauthorized
    if (!accessToken){
        return res.status(403).send();
    }
    next();
}