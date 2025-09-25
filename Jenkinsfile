pipeline {
    agent {
        docker {
            image 'node:18'   // Usa la imagen oficial de Node.js con npm incluido
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Monta el socket Docker
        }
    }

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
