const { verifyToken } = require("../utiles/index");

module.exports = (req, res, next) => {
    const isvalid = req.headers.authorization?.startsWith("Bearer ");
    if (!isvalid) return res.status(401).json({ success: false, error: "Unauthorized" });

    try {
        const token = req.headers.authorization?.split(" ")[1];
        const payload = verifyToken(token);
       
        if (!payload.id) {
            return res.status(400).json({ success: false, error: "invalid token" });
        }

        req.user = payload;
    } catch (error) {
        console.log(error)
        return res.json({ success: false, error: "invalid token" })
    }
    next();
}