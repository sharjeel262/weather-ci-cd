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
                sh 'docker build -t sharjeel262/weather-app:latest .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker stop weather-app || true'
                sh 'docker rm weather-app || true'
                sh 'docker run -d -p 5000:80 --name weather-app sharjeel262/weather-app:latest'
            }
        }
    }
}
