const register = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Register API Working",
  });
};

const login = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Login API Working",
  });
};

module.exports = {
  register,
  login,
};