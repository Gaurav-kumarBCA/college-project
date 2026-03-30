const { signupdb, logindb } = require("../../Services/user/user.services");
const {
  hasspassword,
  verifyPassword,
  generateToken,
} = require("../../utiles/index");
const saltRound = 10;

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      error: "All Field are required",
      data:["name", "email", "password"]
    });
  }

  try {
    const hashPassword = await hasspassword(password, saltRound);

    const user = await signupdb({ name, email, password: hashPassword });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Something went wrong",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Signup Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: "User already exists!",
      });
    }
    res.status(500).json({
      success: false,
      error: "Somthing went wrong in user",
    });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  if (!password || !email) {
    return res.status(400).json({
      success: false,
      error: "All Field are required",
    });
  }
    try {
        const user = await logindb(email);
        // console.log(user)
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User does't exist"
            })
        }
        const isValid =await verifyPassword(password, user.password);
        if (!isValid) {
            return res.status(400).json({
                success: false,
                error: "Incorrect password",
            })
        }
        const {accessToken,refreshToken}=generateToken({
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        })
        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            data: {user,accessToken,refreshToken}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: "Somthing went wrong "
        })
    }
};
module.exports = { signup, login };
