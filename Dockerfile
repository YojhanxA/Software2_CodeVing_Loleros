# Imagen base de Node.js
FROM node:18

# Crear directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código del proyecto
COPY . .

# Exponer el puerto definido en tu index.js
EXPOSE 3000
EXPOSE 4000

# Comando para iniciar la app
CMD ["npm", "run", "dev"]
