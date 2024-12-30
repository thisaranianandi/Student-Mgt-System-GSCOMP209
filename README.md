Student Management System
MTA Wickramasinghe – GSCOMP209 – Intake VI
CSC 554 2.0 Net-centric Computing and System Administration
________________________________________
Introduction ---  The Student Management System is developed as part of an assignment to showcase the use of modern web technologies. It integrates a Spring Boot backend with a React.js frontend to facilitate efficient management of students, departments, courses, and teachers. This project demonstrates containerization using Docker and automates the deployment process with Jenkins CI/CD pipelines.
________________________________________
Features
1.	Student Management:
o	Add, update, and delete student details.
o	Assign students to specific departments.
2.	Department Management:
o	Full CRUD operations for departments.
3.	Course Management:
o	Add, edit, and delete courses.
4.	Teacher Management:
o	Register teachers and assign them to courses.
5.	Reports:
o	Generate and download student-related reports.
________________________________________
Technical Overview
Backend
•	Framework: Spring Boot
•	Database: MySQL (Dockerized for seamless integration)
•	APIs: RESTful APIs for all CRUD operations.
Frontend
•	Framework: React.js
•	Design: User-friendly interface with smooth navigation.
•	State Management: Handled using React's built-in state management tools.
________________________________________
CI/CD Pipeline with Jenkins
A Jenkins pipeline was configured for continuous integration and deployment.
Stages in the Pipeline:
1.	Source Code Checkout: Pulls the latest code from GitHub.
2.	Building Backend and Frontend:
o	Compiles the Spring Boot application using Maven.
o	Builds the React.js production files.
3.	Building Docker Images: Creates separate Docker images for the backend and frontend using respective Dockerfiles.
4.	Tagging Docker Images: Tags the images for versioning and deployment.
5.	Pushing Docker Images to Docker Hub: Uploads the tagged images to the Docker Hub repository.
6.	Pipeline Completion: Ensures all stages are successfully executed.
________________________________________
Docker Containerization
•	Backend and Frontend Containers:
Dockerfiles were created to define the environment for the Spring Boot backend and React.js frontend.
•	MySQL Database Container:
Configured using the official MySQL Docker image, with environment variables for database name, user, and password.
________________________________________
GitHub Repository
The complete project code, including the Jenkinsfile for the CI/CD pipeline, is maintained in the GitHub repository:
https://github.com/thisaranianandi/Student-Mgt-System-GSCOMP209.git
________________________________________
Conclusion
The Student Management System effectively demonstrates modern software engineering practices, including full-stack development, containerization, and CI/CD automation. It meets the assignment requirements and showcases proficiency in using tools like Docker, Jenkins, Spring Boot, and React.js.

