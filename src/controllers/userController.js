const userService = require("../services/userService");

const getProfile = async (req, res) => {
  try {
    const profile = await userService.getProfile(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully.",
      data: profile,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
};