pipeline {
    agent any

    stages {
        stage("Install dependencies") {
            steps {
                echo "Starting installing dependencies..."
                script {
                    if(isUnix()){
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage("Run unit tests (JEST)") {
            steps {
                echo "Starting running unit tests..."
                script {
                    if(isUnix()){
                        sh 'npm run test'
                    } else {
                        bat 'npm run test'
                    }
                }
            }
        }

        stage("Down container") {
            steps {
                script {
                    if(isUnix()){
                        sh 'docker-compose down -v'
                    } else {
                        bat 'docker-compose down -v'
                    }
                }
            }
        }

        stage("Build and up container") {
            steps {
                script {
                    if(isUnix()){
                        sh 'docker-compose up --build -d'
                    } else {
                        bat 'docker-compose up --build -d'
                    }
                }
            }
        }
    } 
}
//hola profe