pipeline {
   agent any


    stages {
        stage('Checkout') {
            steps {
                git branch: 'Alex', url: 'https://github.com/YojhanxA/Software2_CodeVing_Loleros.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step definido"'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
