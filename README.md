# User Authentication and Authorization API

A Node.js RESTful API for user authentication and authorization using **JWT bearer tokens**, built with **Express.js** and **MongoDB**. This project follows the **MVC pattern** and includes user registration, login, and protected user information retrival.

## 🚀 Features

* User Registration
* User Login with JWT Generation
* Password Hashing with bcrypt
* JWT Token-based Authentication (Bearer)
* Protected Route for Fetching Logged-in User Info
* MVC Structure (Model, Controller, Routes)

---

## Deployed URL

https://user-authentication-and-authorization-wrnq.onrender.com

---

## 💠 Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT (jsonwebtoken)
* bcrypt
* dotenv
* Postman for testing

---

## 📁 Folder Structure

```
User Authentication And Authorization/
│
├── controllers/       # Business logic
│   └── authController.js
│
├── middlewares/       # JWT auth middleware
│   └── authMiddleware.js
│
├── models/            # Mongoose schema/model
│   └── user.js
│
├── routes/            # Routes definition
│   └── authRoutes.js
│
├── utils/
│   └── config.js      # Environment variables (JWT secret,DB URI,PORT)
│   └── errorRoute.js  # Fallback route handler
│   └── logger.js      # Request logger middleware
│
├── .env               # Environment variables
├── app.js             # Express app setup
├── server.js          # Entry point
└── README.md
```

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env` file**

Create a `.env` file in the root directory with the following:

```
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

4. **Run the Application**

```bash
npm run dev
```

---



## 🔐 API Endpoints

### 1. Register User

**POST** `/api/auth/register`

**Body:**

```json
{
  "name": "raghu",
  "email": "berry@gmail.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "user registered successfully"
}
```

---

### 2. Login User

**POST** `/api/auth/login`

**Body:**

```json
{
  "email": "berry@gmail.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "user logged in successfully",
  "token": "your-jwt-token"
}
```

---

### 3. Get Logged-In User Info

**GET** `/api/auth/me`

**Headers:**

```
Authorization: Bearer your-jwt-token
```

**Response:**

```json
{
  "user": {
    "id": "user_id",
    "name": "raghu",
    "email": "berry@gmail.com"
  }
}
```

---


## 📌 Notes

* Passwords are securely hashed using `bcrypt`.
* JWT is used for stateless session handling.
* `.env` file is used for sensitive config (never push to GitHub).
* Uses proper error handling and validation for cleaner API responses.

---
📬 Postman API Documentation

You can test all the API endpoints using the Postman documentation below:

🔗 https://documenter.getpostman.com/view/35311398/2sB3BALCFq


---

