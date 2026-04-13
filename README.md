# 🎉 Eventix – Scalable College Event Registration Platform

Eventix is a production-oriented full-stack platform designed to streamline event discovery, registration, and engagement within academic institutions.

The system supports both MERN (MongoDB) and Spring Boot + MySQL architectures, making it flexible for different backend strategies while maintaining a consistent frontend experience.

This project is structured with an industry mindset, focusing on scalability, modularity, and real-world usability rather than a basic academic implementation.

---

## 1. Project Overview

Eventix solves a common problem in colleges where students struggle to find and register for events across departments.

The platform provides:

- Centralized event discovery
- Secure authentication
- Department-based filtering
- Seamless event registration
- Direct communication via WhatsApp integration

It is designed to be easily customizable for any institution.

---

## 2. Architecture Overview

### Architecture Style

Eventix follows a decoupled client-server architecture:

- Frontend: React-based SPA
- Backend: REST APIs (Node.js or Spring Boot)
- Database: MongoDB or MySQL
- Authentication: JWT-based stateless auth

### System Design

- Presentation Layer: React + Tailwind CSS
- Application Layer: REST APIs
- Data Layer: MongoDB / MySQL
- Authentication Layer: JWT

### High-Level Flow

User → Frontend → Backend API → Database  
User → Event Registration → WhatsApp Redirect

---

## 3. Tech Stack

### Frontend
- React.js
- Tailwind CSS
- GSAP (animations)

### Backend (MERN Version)
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Backend (Spring Boot Version)
- Java + Spring Boot
- Spring Security + JWT
- MySQL

### Other Tools
- Git & GitHub
- REST APIs
- Postman (API testing)

---

## 4. 🔥 Features

### 🔐 User Authentication
- Secure login using email and password.
- JWT-based authentication and password encryption (bcrypt/Spring Security).

### 📅 Event Management
- View current and upcoming events.
- Event details include:
  - Name  
  - Poster  
  - Venue  
  - Date and Time  

### 📝 Event Registration
- One-click registration for any event.
- Integrated **WhatsApp** link for direct communication with coordinators.

### 🏷️ Department-Specific Filtering
- Events categorized by departments:
  - IT
  - CSE
  - Mechanical
  - Chemical
  - Food Tech
  - EEE
  - ECE
  - ...and more

### 🎨 Interactive UI
- Clean, responsive design using **Tailwind CSS**.
- Smooth animations powered by **GSAP** for an enhanced user experience.

---

## ⚙️ Technologies Used

### 🧩 MERN Stack Version
- **Frontend**: React.js, Tailwind CSS, GSAP  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT

### 🧱 Spring Boot + MySQL Version
- **Frontend**: React.js (same UI as MERN version)  
- **Backend**: Spring Boot (Java)  
- **Database**: MySQL  
- **Authentication**: Spring Security with JWT

---

### Authentication
- Secure login system
- JWT-based session handling
- Password encryption

### Event Management
- View all events
- Detailed event information (venue, date, poster)

### Registration System
- One-click event registration
- WhatsApp integration for coordinator communication

### Filtering
- Department-based filtering (CSE, IT, ECE, etc.)

### UI/UX
- Fully responsive design
- Smooth animations using GSAP
- Clean and modern interface

---

## 5. Folder Structure

```

.
├── frontend/
├── backend/ (MERN)
├── backend/ (Spring Boot)

````

### Structure Explanation

- frontend/ contains the complete React UI
- backend/ (MERN) handles Node.js APIs and MongoDB logic
- backend/ (Spring Boot) provides enterprise-level backend implementation

This separation ensures flexibility and independent deployment.

---

## 6. Key Engineering Decisions

### 1. Dual Backend Architecture
Supports both MERN and Spring Boot to demonstrate flexibility.

Trade-off:
- Increased maintenance
- Higher learning value

### 2. JWT Authentication
Stateless authentication for scalability.

### 3. WhatsApp Integration
Reduces complexity compared to building a messaging system.

### 4. Tailwind + GSAP
Modern UI with minimal CSS complexity and better user experience.

---

## 7. Setup & Installation

### MERN Version

```bash
git clone https://github.com/divakar-srinivasan/React-Eventix-fullstack.git
cd React-Eventix-fullstack
````

#### Backend

```bash
cd backend
npm install
node server
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

Environment variables:

```
PORT=4200
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

---

### Spring Boot Version

```bash
git clone https://github.com/divakar-srinivasan/Eventix-SpringBoot-MySQL.git
cd Eventix-SpringBoot-MySQL
```

#### Database

```sql
CREATE DATABASE eventix_db;
```

#### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Update application.properties:

```
spring.datasource.url=jdbc:mysql://localhost:3306/eventix_db
spring.datasource.username=your_username
spring.datasource.password=your_password
jwt.secret=your_secret
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 8. API Overview

### Authentication

* POST /login
* POST /register

### Events

* GET /events
* GET /events/:id

### Registration

* POST /register-event

---

## 9. UI/UX Overview

* Responsive across all devices
* Smooth animation transitions
* Clean event card layout
* User-friendly navigation

---

## 10. Scalability & Performance

### Strengths

* Stateless backend (JWT)
* Modular architecture
* Independent frontend/backend scaling

### Limitations

* No caching
* No rate limiting
* No load balancing

---

## 11. Security Considerations

* JWT authentication implemented
* Password hashing used

### Missing for production

* Role-based access control
* Input validation
* HTTPS enforcement

---

## 12. Testing Strategy

* Basic manual testing
* Unit testing
* Integration testing
* API contract testing

---

## 13. Deployment

Currently supports:

* Local development
* Manual deployment

Not implemented:

* CI/CD pipelines
* Cloud deployment
* Docker/Kubernetes

---

## 14.## Screenshots

![Screenshot 2025-01-28 142447](https://github.com/user-attachments/assets/bac5daed-a36e-4113-8110-9811f951e367)

![Screenshot 2025-01-28 142458](https://github.com/user-attachments/assets/306fcf8d-464f-4e94-acea-1ac2a5e491dd)

![Screenshot 2025-01-28 142516](https://github.com/user-attachments/assets/21be47e5-5600-4a31-84e1-e2c4018edf09)

![Screenshot 2025-01-28 142525](https://github.com/user-attachments/assets/5ece3889-7787-4ef2-82f0-042aa2226294)

![Screenshot 2025-01-28 142620](https://github.com/user-attachments/assets/e02e21dd-6643-4970-b76a-6086a42fb748)

![Screenshot 2025-01-28 142639](https://github.com/user-attachments/assets/1c429593-9683-4e89-99ab-df1bea282f48)

![Screenshot 2025-01-28 142659](https://github.com/user-attachments/assets/aacea0f4-60d3-4317-8a6d-102fcc9194cb)

![Screenshot 2025-01-28 142712](https://github.com/user-attachments/assets/1cecb715-039f-4446-a323-68015c179ac7)

## Animations

Eventix leverages GSAP for:
- Smooth entry animations for event cards.
- Transition effects when navigating between pages.
- Staggered animations for a professional feel.

## Tailwind CSS Highlights
- Custom color themes (Black and Red) for branding.
- Fully responsive layout for mobile and desktop screens.

## Future Enhancements
- **Admin Dashboard**: Allow event organizers to create and manage events.
- **Payment Gateway**: Add support for paid workshops.
- **Notification System**: Send reminders for registered events.
- **Feedback Mechanism**: Collect feedback from participants.


## 15. Contribution Guidelines

1. Fork repository
2. Create feature branch
3. Commit changes
4. Create pull request

---

## 16. Contact

For any queries or support, feel free to reach out:
- **Email**: sdivakar2005@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/divakar-srinivasan/
- **GitHub**: [divakar-srinivasan](https://github.com/divakar-srinivasan)

---

Made with ❤️ by DIVAKAR S.
