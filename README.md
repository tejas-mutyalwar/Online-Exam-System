# Online Exam System

Welcome to the Online Exam System, a comprehensive web-based application designed to simplify and enhance the process of conducting online exams. This project employs a robust tech stack, utilizing Spring Boot for the backend, MySQL for user and result storage, and MongoDB for quiz and question bank management. The user interface is crafted with React.js for students and Angular for teachers and administrators.
## Features
1. User Roles

    Admin:
        Manages users and roles.
        Controls the overall system.

    Teacher:
        Registers and logs in using Angular-based UI.
        Adds questions to the question bank.
        Creates quizzes by selecting questions.
        

    Student:
        Registers and logs in using React.js-based UI.
        Views and attempts quizzes created by teachers.

2. Quiz Process

    Quiz Creation:
        Teachers use Angular UI to create quizzes, selecting questions from the MongoDB-based question bank.

    Quiz Attempt:
        Students access React.js UI to view and attempt quizzes.
        Instructions page details quiz time, marks, and question count.
        A countdown timer signals the remaining time for submission.

    Quiz Submission:
        Automatically submitted when the timer runs out.
        Students receive a printable PDF scorecard.

2. Dashboard

    Student Dashboard:
        Personalized dashboard for students using React.js.
        Displays previous quiz attempts and quiz details.

## Tech Stack
    
- **Backend:**
  - Spring Boot
- **Database:**
  - MySQL
  - MongoDB
- **Frontend:**
  - React.js
  - Angular
