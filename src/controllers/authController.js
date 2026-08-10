const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if email already exists
    const existingUser = await userModel.getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Save user
    const user = await userModel.createUser({
      name,
      email,
      mobile,
      passwordHash,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user.Id,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.PasswordHash
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.Id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRES,
      }
    );

    return res.json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user.Id,
        name: user.Name,
        email: user.Email,
        mobile: user.Mobile,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};