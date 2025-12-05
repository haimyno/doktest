pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/haimyno/doktest.git'
        BRANCH = 'main'
        IMAGE_NAME = 'myapphaimi'
        REMOTE_HOST = 'devops@192.168.99.16'
        REMOTE_PATH = '/home/deploy'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Deploy to Remote Server') {
            steps {
                script {
                    // Copy Docker image to remote server using docker save/load
                sh """
docker save ${IMAGE_NAME}:latest | ssh ${REMOTE_HOST} \\
'docker load && docker stop ${IMAGE_NAME} || true && docker rm ${IMAGE_NAME} || true && docker run -d --name ${IMAGE_NAME} -p 8080:3003 ${IMAGE_NAME}:latest'
"""

                }
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
