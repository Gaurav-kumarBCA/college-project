const jwt = require("jsonwebtoken");
const { generateToken } = require("../../utility/index");


const refreshAccessToken = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      success: false,
      error: "Refresh token required"
    });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_SECRET);

    const { accessToken } = generateToken({
      id: payload.id,
      name: payload.name,
      email: payload.email
    });

    return res.status(200).json({
      success: true,
        data:  accessToken
    });

  } catch (error) {
    return res.status(403).json({
      success: false,
      error: "Invalid refresh token"
    });
  }
};

module.exports = refreshAccessToken;
