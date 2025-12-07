pipeline {
    agent any

    environment {
        IMAGE_NAME = "sharjeel262/weather-app"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning repo..."
                git 'https://github.com/sharjeel262/weather-ci-cd.git'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Checking if index.html exists"
                script {
                    if (fileExists('src/index.html')) {
                        echo "index.html found ✅"
                    } else {
                        error("index.html not found ❌")
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running Docker container..."
                sh '''
                    docker rm -f weather-app || true
                    docker run -d -p 5000:80 --name weather-app ${IMAGE_NAME}:${IMAGE_TAG}
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! ✅'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
