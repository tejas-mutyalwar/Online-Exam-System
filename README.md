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
 
## Glimpses of the App

![Screenshot (65)](https://github.com/tejas-mutyalwar/Online-Exam-System/assets/59694591/170b973f-f156-47d9-bea9-e0f9515d5b91)
![Screenshot (66)](https://github.com/tejas-mutyalwar/Online-Exam-System/assets/59694591/02e961bc-46f7-4d99-88fd-b5431a5f6a57)
![Screenshot (67)](https://github.com/tejas-mutyalwar/Online-Exam-System/assets/59694591/74d448d2-86e5-4e5e-87fe-5b15b927a0b6)
![Screenshot (68)](https://github.com/tejas-mutyalwar/Online-Exam-System/assets/59694591/51ba8da2-def5-4e6a-9201-e543f5a670a7)
![Screenshot (69)](https://github.com/tejas-mutyalwar/Online-Exam-System/assets/59694591/a8f2be11-a720-4496-8e5c-b19816d290c1)
![Screenshot (70)](https://github.com/tejas-mutyalwar/Online-Exam-System/assets/59694591/ea618968-b5b3-41f0-b17c-726c01f5bac4)

