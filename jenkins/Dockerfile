# Imagen base de Jenkins con JDK 17
FROM jenkins/jenkins:lts-jdk17

USER root

# Instalar Docker CLI y Compose plugin
RUN apt-get update && \
    apt-get install -y docker.io docker-compose-plugin && \
    rm -rf /var/lib/apt/lists/*

# Volver al usuario Jenkins
USER jenkins
