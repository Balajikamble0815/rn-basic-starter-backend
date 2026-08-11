const userModel = require("../models/userModel");

const getProfile = async (userId) => {
  const user = await userModel.getUserById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  return {
    id: user.Id,
    name: user.Name,
    email: user.Email,
    mobile: user.Mobile,
    profileImage: user.ProfileImage,
    role: user.Role,
    createdAt: user.CreatedAt,
  };
};

module.exports = {
  getProfile,
};