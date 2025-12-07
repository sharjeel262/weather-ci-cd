pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/sharjeel262/weather-ci-cd.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t sharjeel262/weather-app:latest .'
            }
        }
        stage('Run Docker Container') {
            steps {
                bat 'docker stop weather-app || exit 0'
                bat 'docker rm weather-app || exit 0'
                bat 'docker run -d -p 5000:80 --name weather-app sharjeel262/weather-app:latest'
            }
        }
    }
}
