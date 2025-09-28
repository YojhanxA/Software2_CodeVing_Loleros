pipeline {
    agent any

    stages{
        stages("install dependencies"){
            steps{
                echo "starting installing dependencies..."

                script {
                    if(isUnix()){
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }
        stage ("Run unit tests(JEST)"){
            steps{
                echo "starting running unit tests..."

                script {
                    if(isUnix()){
                        sh 'npm run test'
                    } else {
                        bat 'npm run test'
                    }
                }
            }
        }
    }
    stage ("down container"){
        steps{
            script {
                if(isUnix()){
                    sh 'docker-compose down -v'
                } else {
                    bat 'docker-compose down -v'
                }
            }
        }
    }
    stage ("build and up container"){
        steps{
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