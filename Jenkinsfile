pipeline {
    agent any
    tools {
        maven 'Maven39' //  Maven version configured in Jenkins
    }
    stages {
        stage('Checkout Source Code') {
            steps {
                // Checkout code from your GitHub repository
                checkout scmGit(
                    branches: [[name: '*/main']], 
                    extensions: [], 
                    userRemoteConfigs: [[
                        credentialsId: 'Student-Management-System', 
                        url: 'https://github.com/thisaranianandi/Student-Mgt-System-GSCOMP209'
                    ]]
                )
            }
        }
        stage('Build Maven Project') {
            steps {
                // Build the Java Spring Boot backend project using Maven
                bat 'mvn -f ems-backend/pom.xml clean install -DskipTests -e -X'
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                // Build the Docker image for the backend
                bat 'docker build -f ems-backend/Dockerfile -t thisaranianandi/student-mgt-system-backend:latest ems-backend/'
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                // Build the Docker image for the React frontend
                bat 'docker build -f ems-frontend/Dockerfile -t thisaranianandi/student-mgt-system-frontend:latest ems-frontend/'
            }
        }
        stage('Login to DockerHub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerpwd', variable: 'dockertest')]) {
                        bat 'docker login -u thisaranianandi -p %dockertest%'
                    }
                }
            } // Closing bracket for Login to DockerHub stage
        } // Closing bracket for Login to DockerHub stage
        
        stage('Push Backend Image to DockerHub') {
            steps {
                bat 'docker push thisaranianandi/student-mgt-system-backend:latest'
            }
        }
         stage('Push Frontend Image to DockerHub') {
            steps {
                bat 'docker push thisaranianandi/student-mgt-system-frontend:latest'
            }
        }
    }
}

