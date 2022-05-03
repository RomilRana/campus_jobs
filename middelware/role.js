checkRole = (role) => {
  return (req, res, next) => {
    console.log("++++++++++++====================+++++++++++++++");
    console.log("In the middleware");
    console.log("++++++++++++====================+++++++++++++++");
    console.log(req.cookies.jwtToken);
    
    if (role !== req.user.role) res.status(401).json({ message: "you are not authorized..." });
    else next();
  }
}

module.exports = {
  checkRole,
}