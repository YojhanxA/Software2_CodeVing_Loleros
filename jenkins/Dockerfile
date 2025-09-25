FROM jenkins/jenkins:lts-jdk17

USER root

# Instalar Docker CLI y Docker Compose
RUN apt-get update && \
    apt-get install -y docker.io docker-compose && \
    rm -rf /var/lib/apt/lists/*

USER jenkins
