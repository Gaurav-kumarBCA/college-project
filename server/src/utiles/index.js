const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const accessToken = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "6d",
  });
  const refreshToken = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "6d",
  });
  return { accessToken, refreshToken };
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const hasspassword = async (password, salt) => {
  return bcrypt.hash(password, salt);
};

const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = { hasspassword, verifyPassword, generateToken, verifyToken };
