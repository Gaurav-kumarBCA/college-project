module.exports = (req, res, next) => {
    if(req.user.role !== "HOD"){
        return res.status(403).json({
            success:false,
            error: "Access denied"
        })
    }
    next();
}