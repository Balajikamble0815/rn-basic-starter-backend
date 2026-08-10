const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - mobile
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Balaji Kamble
 *               email:
 *                 type: string
 *                 example: balaji@gmail.com
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: User Registered Successfully
 */
router.post("/register", authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: balaji@gmail.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login Successful
 */
router.post("/login", authController.login);

module.exports = router;