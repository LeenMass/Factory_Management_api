# 🚀 Factory Management System API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge)

A **full-featured backend system** for managing **employees, departments, shifts**, and **user activity** in a factory.  
Built with **Node.js, Express, MongoDB, and Mongoose**, featuring **JWT authentication** and external API validation for registered users.

---

## 📖 Overview

This project provides:

- Employee, Department, and Shift management  
- JWT-based authentication verified via an external API  
- Daily action limits per user, with automatic logout when exceeded  
- Logging of every user action in JSON for auditing  
- Filtering employees by department  
- Clean **MVC architecture** for maintainability and scalability  

> Each user has a limited number of daily actions. Exceeding the limit logs them out until the next day.

---
## ⚙️ Technologies

Node.js | Express.js | MongoDB | Mongoose | JWT | JavaScript (ES6) | dotenv 

---
## ⭐ Key Features

### Employees
- Add/Edit/Delete/View employees  
- Assign employees to shifts and departments  
- Filter employees by department  

### Departments
- Add/Edit/Delete departments  
- Assign/reassign employees to departments  
- View department manager and employee list  

### Shifts
- Create/Edit shifts  
- Assign employees to shifts  
- delete employees from shift 

### Users
- Pre-declared registered users  
- Each action reduces the daily allowed actions count  
- Automatic logout when daily limit is reached  

### Authentication & Security
- JWT-based authentication  
- External API verification  
---


## 🛠 Installation & Running

1️⃣ Clone the repository  
```bash
git clone : https://github.com/LeenMass/Factory_Management_api
cd Factory-Management-api
```

2️⃣ Install dependencies  
```bash
npm install
```

3️⃣ Copy environment example and update variables  
```bash
cp .env.example .env
```
Edit `.env` with your secrets and database connection.

4️⃣ Start the server  
```bash
npm run dev
```

---

## 👨‍💻Author: **Leen Massarwy**

## 📄 License

MIT License © 2025
