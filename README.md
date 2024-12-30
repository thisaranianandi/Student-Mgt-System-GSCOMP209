README: Student Management System
MTA Wickramasinghe – GSCOMP209 – Intake VI
CSC 554 2.0 Net-centric Computing and System Administration

Introduction
The Student Management System is developed as part of an assignment to showcase the use of modern web technologies. It integrates a Spring Boot backend with a React.js frontend to facilitate efficient management of students, departments, courses, and teachers. This project demonstrates containerization using Docker and automates the deployment process with Jenkins CI/CD pipelines.

Features
Admin Authentication: Secure login functionality for administrators.
Student Management:
Add, update, and delete student details.
Assign students to specific departments.
Department Management:
Full CRUD operations for departments.
Course Management:
Add, edit, and delete courses.
Teacher Management:
Register teachers and assign them to courses.
Reports:
Generate and download student-related reports.
Technical Overview
Backend
Framework: Spring Boot
Database: MySQL (Dockerized for seamless integration)
APIs: RESTful APIs for all CRUD operations.
Frontend
Framework: React.js
Design: User-friendly interface with smooth navigation.
State Management: Handled using React's built-in state management tools.
CI/CD Pipeline with Jenkins
A Jenkins pipeline was configured for continuous integration and deployment.

Stages in the Pipeline:

Source Code Checkout: Pulls the latest code from GitHub.
Building Backend and Frontend:
Compiles the Spring Boot application using Maven.
Builds the React.js production files.
Building Docker Images: Creates separate Docker images for the backend and frontend using respective Dockerfiles.
Tagging Docker Images: Tags the images for versioning and deployment.
Pushing Docker Images to Docker Hub: Uploads the tagged images to the Docker Hub repository.
Pipeline Completion: Ensures all stages are successfully executed.
Docker Containerization
Backend and Frontend Containers:
Dockerfiles were created to define the environment for the Spring Boot backend and React.js frontend.

MySQL Database Container:
Configured using the official MySQL Docker image, with environment variables for database name, user, and password.

GitHub Repository
The complete project code, including the Jenkinsfile for the CI/CD pipeline, is maintained in the GitHub repository:
Student Management System - GitHub Repository

Conclusion
The Student Management System effectively demonstrates modern software engineering practices, including full-stack development, containerization, and CI/CD automation. It meets the assignment requirements and showcases proficiency in using tools like Docker, Jenkins, Spring Boot, and React.js.
