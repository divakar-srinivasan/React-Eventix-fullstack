# Eventix - College Event Registration System

Eventix is a MERN stack-based web application designed for college students to stay updated on ongoing events and workshops, allowing them to register seamlessly. Built with Tailwind CSS for responsive design and GSAP for animations, Eventix offers an engaging and user-friendly experience. The platform is tailored for Kongu Engineering College but can be adapted for other institutions as well.

## Features

1. **User Authentication**
   - Login functionality using email and password.
   - Secure data storage with encryption.

2. **Event Management**
   - Users can view ongoing and upcoming events.
   - Details such as event name, poster, venue, date, and time are displayed.

3. **Event Registration**
   - Users can register for events directly through the platform.
   - Integrated WhatsApp link for easy communication with event organizers.

4. **Interactive Design**
   - Modern, responsive UI using Tailwind CSS.
   - Smooth animations powered by GSAP.

5. **Department-Specific Filtering**
   - Events are categorized by departments such as IT, CSE, Mechanical, Chemical, Food Tech, EEE, ECE, etc.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, GSAP
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

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

## Screenshots
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

Made with ❤️ by Ganesh Kanna.

