# 🚀 Factory Management System API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge)

A **scalable and secure backend system** for managing **employees, departments, shifts**, and **user activity** in factory.
Built with **Node.js, Express, MongoDB, and Mongoose**, featuring **JWT authentication** and integration with an **external users API** for validating registered users.

---


## 📖 Overview

This system provides:

- Employee, Department, and Shift management  
- JWT-based user authentication verified via an external API  
- Daily action limits per user with automatic logout  
- User activity logging for auditing  
- Filtering employees by department  
- Clean **MVC architecture** for maintainability and scalability  

> Each user has a limited number of daily actions. Exceeding the limit automatically logs the user out.

---

## ⭐ Key Features

- **Employees:** Add/Edit/Delete/View, assign to shifts/departments  
- **Departments:** Manage departments, assign/reassign employees  
- **Shifts:** Create/Edit, assign employees, view shift details  
- **Authentication:** JWT-based, external API validation  
- **User Activity Tracking:** Limited actions per day, automatic logout, JSON logging  

---

## 🛠 Tech Stack

Node.js | Express.js | MongoDB | Mongoose | JWT | JavaScript (ES6) | dotenv

---

## ⚙️ Quick Start

1️⃣ Clone the repository  
```bash
git clone https://github.com/yourname/factory-management-api.git
cd factory-management-api
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

4️⃣ Start server  
```bash
npm run dev
```

---
**Author:** Leen Massarwy

## 📄 License

MIT License © 2025  
