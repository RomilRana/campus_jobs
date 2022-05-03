checkdata = async (data) => {
    return(req,res,next) => {
        if(!data) {
            res.status(404).json({ message: "no data found" });
        }
        else {
            next();
        }
    }
}

module.exports = {
    checkdata,
}