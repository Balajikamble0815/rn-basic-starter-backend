const bcrypt = require("bcrypt");

const userModel = require("../models/userModel");
const { generateToken } = require("../utils/jwt");

/**
 * Register User
 */
const register = async (userData) => {
  // Check Existing User

  const existingUser = await userModel.getUserByEmail(
    userData.email
  );

  if (existingUser) {
    throw new Error("Email already registered.");
  }

  // Hash Password

  const passwordHash = await bcrypt.hash(
    userData.password,
    10
  );

  // Save User

  const user = await userModel.createUser({
    name: userData.name,
    email: userData.email,
    mobile: userData.mobile,
    passwordHash,
  });

  return user;
};

/**
 * Login User
 */
const login = async (email, password) => {
  const user = await userModel.getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.PasswordHash
  );

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken(user);

  return {
    token,

    user: {
      id: user.Id,
      name: user.Name,
      email: user.Email,
      mobile: user.Mobile,
      profileImage: user.ProfileImage,
      role: user.Role,
    },
  };
};

module.exports = {
  register,
  login,
};