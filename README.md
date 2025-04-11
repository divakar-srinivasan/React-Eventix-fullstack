Eventix - College Event Registration System
Eventix is a full-stack web application built to help college students stay updated with ongoing events and workshops and register for them seamlessly. Originally built using the MERN stack, the application has also been implemented using Spring Boot and MySQL, showcasing flexibility in both NoSQL and relational database backends.

With a responsive design built using Tailwind CSS and smooth animations via GSAP, Eventix ensures a modern, engaging, and user-friendly experience. While designed specifically for Kongu Engineering College, it can easily be adapted to suit any educational institution.

🔥 Features
User Authentication

Secure login with email and password.

JWT-based authentication and password encryption.

Event Management

Browse current and upcoming events with detailed info: name, poster, venue, date, and time.

Event Registration

One-click registration for events.

WhatsApp integration for direct communication with event coordinators.

Department-Specific Filtering

View events by department: IT, CSE, Mechanical, Chemical, Food Tech, EEE, ECE, and more.

Interactive UI

Built using Tailwind CSS for clean design and responsiveness.

GSAP-powered animations enhance the overall user experience.

⚙️ Technologies Used
MERN Stack Version:
Frontend: React.js, Tailwind CSS, GSAP

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Spring Boot Version:
Backend: Spring Boot (Java)

Database: MySQL

Frontend: React.js (same UI as the MERN version)

Authentication: Spring Security with JWT

✅ Both versions provide the same core functionality—choose the stack based on your project requirements.

## Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/divakar-srinivasan/React-Eventix-fullstack.git
   cd React-Eventix-fullstack
   ```

2. **Install Dependencies**
   - Install server-side dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install client-side dependencies:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `server` directory with the following:
   ```env
   PORT=4200
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**
   - Start the backend server:
     ```bash
     cd backend
     node server
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```

   The application will be accessible at `http://localhost:3000`.

🛠 Installation Guide (Spring Boot + MySQL Version)
⚠️ This version uses Spring Boot for the backend, MySQL as the database, and React for the frontend. Ensure you have Java 17+, Maven, and MySQL installed.

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/divakar-srinivasan/Eventix-SpringBoot-MySQL.git
cd Eventix-SpringBoot-MySQL
2. Setup MySQL Database
Open MySQL and create a database named eventix_db (or any name of your choice):

sql
Copy
Edit
CREATE DATABASE eventix_db;
3. Configure Spring Boot Backend
Navigate to the backend folder:

bash
Copy
Edit
cd backend
Open application.properties and update the database credentials:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/eventix_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
jwt.secret=your_jwt_secret
Install dependencies and run the server:

bash
Copy
Edit
./mvnw spring-boot:run
The backend will start at http://localhost:8080

4. Setup React Frontend
From the project root:

bash
Copy
Edit
cd frontend
npm install
npm start
The frontend will be accessible at http://localhost:3000

✅ Spring Boot Features Implemented
REST APIs for user login and registration

JWT-based authentication and authorization

CRUD APIs for event creation and registration

DTOs and Service layers for clean architecture

Role-based access control (if extended)



## Screenshots

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

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes with a descriptive message.
4. Push your branch and create a Pull Request.


## Contact

For any queries or support, feel free to reach out:
- **Email**: sdivakar2005@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/divakar-srinivasan/
- **GitHub**: [divakar-srinivasan](https://github.com/divakar-srinivasan)

---

Made with ❤️ by DIVAKAR S.

👍

