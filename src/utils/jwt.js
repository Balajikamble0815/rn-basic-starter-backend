const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.Id,
      email: user.Email,
      role: user.Role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.TOKEN_EXPIRES,
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};