# Student Management System

## Introduction
This is a simple **Student Management System** developed using **HTML, CSS, and JavaScript**. The system includes a landing page with basic information about the system and provides links to **Login** and **Register** pages. After logging in with hardcoded credentials, users can add student information, calculate averages, and view the student data. All student data is stored locally using the browser's **localStorage**.

---

## Features

### Landing Page
- Provides a brief introduction to the Student Management System.
- Includes links to **Login** and **Register** pages.

### Login Page
- Users can log in using a hardcoded email and password.
- Upon successful login, the user is greeted on a **Greeting Page**, and the user's name (extracted from the email before the "@" symbol) is displayed.

### Greeting Page
- Displays a welcome message with the user's name (e.g., "Hello user").
- Provides links to two additional pages: **Add Student** and **Fetch Student Data**.

### Add Student Page
- Users can input:
  - **Student Name**
  - **Three Subject Scores**
- The system calculates the average score on submission and stores the student information (name, subject scores, and average) in the browser's **localStorage** in JSON format.

### Fetch Student Data Page
- Retrieves and displays the stored student data from **localStorage** in a table format.
- Keeps a student count using closures.
- Highlights the row with the **highest average** in green and the row with the **lowest average** in red.

---

## Pages and Functionality

### Landing Page (`index.html`)
- Displays a brief description of the system.
- Contains two links:
  - **Login**: Redirects to the Login page.
  - **Register**: Redirects to the Register page (this is only a frontend page).

### Login Page (`login.html`)
- Inputs:
  - **Email** (hardcoded: e.g., `user@example.com`)
  - **Password** (hardcoded: e.g., `password123`)
- After entering the correct email and password, the system redirects the user to the **Greeting Page**.

### Register Page (`register.html`)
- Only a frontend page for a future registration system (currently non-functional).

### Greeting Page (`student.html`)
- Extracts the user’s name from the email (text before the "@" symbol).
- Displays a personalized greeting message (e.g., "Hello user").
- Links to:
  - **Add Student**: To add student information and calculate the average score.
  - **Fetch Student Data**: To view the student data.

### Add Student Page (`addStudent.html`)
- Inputs:
  - **Student Name**
  - **Subject 1 score**
  - **Subject 2 score**
  - **Subject 3 score**
- Upon submission, the average of the three subject scores is calculated.
- The student’s name, individual scores, and the calculated average are stored as a JSON object in the browser's **localStorage**.

### Fetch Student Data Page (`fetchStudent.html`)
- Retrieves all the stored student data from **localStorage**.
- Displays the data in a table format with the following columns:
  - **Student Name**
  - **Subject 1 score**
  - **Subject 2 score**
  - **Subject 3 score**
  - **Average Score**
- Highlights:
  - The row with the **highest average score** is colored green.
  - The row with the **lowest average score** is colored red.
- Uses a closure to maintain and display the student count.
