SQL Library Manager
A dynamic library management system built with Node.js, Express, Sequelize ORM, and PostgreSQL. This full-stack application provides an intuitive interface for managing a collection of books with features for browsing, searching, creating, updating, and deleting book records.

🌟 Features

Complete Book Management: Add, view, update, and delete books
Intuitive User Interface: Clean, responsive design for all device sizes
Search Functionality: Find books by title, author, genre, or year
Form Validation: Client and server-side validation ensures data integrity
Pagination: Browse through the collection with ease
Error Handling: Friendly error messages and 404/500 error pages

🛠️ Technologies Used
Backend

Node.js: JavaScript runtime for server-side code
Express: Web framework for handling routes and middleware
Sequelize ORM: Object-Relational Mapping for database interactions
PostgreSQL: Robust relational database for production
SQLite: Lightweight database for development and testing

Frontend

Pug (Jade): Template engine for server-side rendering
CSS3: Custom styling with modern CSS features
JavaScript: Client-side interactivity and form handling

Development & Deployment

Git: Version control
npm: Package management
Render: Cloud hosting platform for web service and PostgreSQL database

📋 Getting Started
Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)
Git

Installation

Clone the repository

git clone https://github.com/yourusername/SQL-Library-Manager.git
cd SQL-Library-Manager

Install dependencies

npm install

Set up the database

npm run setup-db

Start the development server

npm start

Open your browser and navigate to http://localhost:3000

🔧 Configuration
The application uses environment-specific configuration:

Development: Uses SQLite database stored locally
Production: Uses PostgreSQL database hosted on Render
Test: Uses in-memory SQLite database for testing

Environment variables can be set in a .env file (not included in repository for security).
📊 Database Schema
Book
├── id (Integer, Primary Key, Auto-increment)
├── title (String, Not Null)
├── author (String, Not Null)
├── genre (String)
├── year (Integer)
├── createdAt (DateTime)
└── updatedAt (DateTime)
🔍 Project Structure
SQL-Library-Manager/
├── bin/
│ └── www # Application entry point
├── config/ # Database configuration
├── models/ # Sequelize models
├── public/ # Static assets
│ ├── images/
│ ├── javascripts/ # Client-side JavaScript
│ └── stylesheets/ # CSS files
├── routes/ # Express routes
├── views/ # Pug templates
├── app.js # Express application setup
├── db.js # Database initialization
└── package.json # Dependencies and scripts
🔐 Error Handling
The application includes comprehensive error handling:

Validation errors with user-friendly messages
404 page for resources not found
500 page for server errors
Console logging for debugging

🌐 Deployment
This application is deployed on Render with a PostgreSQL database:

Database is hosted as a Render PostgreSQL service
Web service is connected to the GitHub repository for automatic deployments
Environment variables are configured in the Render dashboard

Live demo: https://sql-library-manager.onrender.com
🚀 Future Enhancements

User authentication and role-based access control
Book checkout system
Book reviews and ratings
Advanced filtering and sorting options
Book cover image uploads
API endpoints for integration with other services

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
