const HODloginDB = require("../../services/HOD/HODlogin.service");
const { verifyPassword, generateToken } = require("../../utiles");

const HODLogin = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(404).json({
            success:false,
            error:'Please enter all fields',
            data: ["email", "password"]
        });
    }
    try {
        const data = await HODloginDB(email);
        if(!data){
            return res.status(404).json({
                success:false,
                error:"User not found",
            });
        }

        const isValid = verifyPassword(password, data.password);
        if(!isValid){
            return res.status(400).json({
                success:false,
                error:"Incorrect password"
            });
        }

        const {accessToken, refreshToken} = generateToken({
            id:data._id,
            name:data.name,
            email:data.email,
            role:data.role
        })

        return res.status(200).json({
            success:false,
            message:"Login successfully",
            data:{data, accessToken, refreshToken}
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            error:"Something went wrong"
        })
    }
}

module.exports = {HODLogin}