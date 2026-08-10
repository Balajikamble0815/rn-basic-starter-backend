# 🚀 RN Basic Starter Backend

A production-ready backend starter built with **Node.js**, **Express.js**, and **SQL Server** using a clean architecture. It includes JWT authentication, password hashing, reusable services, and REST APIs, making it an excellent foundation for React Native and Web applications.

---

## ✨ Features

- 🔐 JWT Authentication
- 🔑 Secure Password Hashing (bcrypt)
- 🗄️ SQL Server Database
- ⚡ Express.js REST APIs
- 🧩 Clean Architecture (Controller → Service → Model)
- 📄 Swagger API Documentation
- 🌐 Environment Variable Support
- 🛡️ Authentication Middleware
- 📦 Modular Folder Structure
- 🚀 Production Ready

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- SQL Server
- MSSQL
- JWT
- bcrypt
- dotenv
- Helmet
- Morgan
- CORS
- Swagger UI

---

## 📂 Project Structure

```text
src
│
├── config
│   ├── database.js
│   └── swagger.js
│
├── controllers
│   └── authController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   └── userModel.js
│
├── routes
│   └── authRoutes.js
│
├── services
│   └── authService.js
│
├── utils
│   ├── jwt.js
│   └── response.js
│
├── app.js
└── server.js
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/yourusername/rn-basic-starter-backend.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file in the project root.

```env
PORT=5000

DB_SERVER=localhost
DB_DATABASE=RNStarterDB
DB_USER=your_username
DB_PASSWORD=your_password
DB_PORT=1433

JWT_SECRET=your_secret_key
TOKEN_EXPIRES=7d
```

---

## ▶️ Run Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## 🔐 Authentication

Use JWT Token in Authorization Header

```
Authorization: Bearer YOUR_TOKEN
```

---

## 📄 Swagger Documentation

```
http://localhost:5000/api-docs
```

---

## 🗃️ Database

Database Name

```
RNStarterDB
```

Users Table

- Id
- Name
- Email
- Mobile
- PasswordHash
- ProfileImage
- Role
- IsActive
- CreatedAt
- UpdatedAt

---

## 📦 Scripts

```bash
npm run dev
npm start
```

---

## 👨‍💻 Author

**Balaji Kamble**

- GitHub: https://github.com/Balajikamble0815
- LinkedIn: https://www.linkedin.com/in/balaji-kamble-ab4a93173/

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to star the repository.