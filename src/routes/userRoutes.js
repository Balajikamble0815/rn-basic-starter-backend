const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authMiddleware");

const userController = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User Management APIs
 */

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get Logged In User Profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile fetched successfully.
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/profile",
  authenticate,
  userController.getProfile
);

module.exports = router;