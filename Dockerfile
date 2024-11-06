# Étape unique : Serveur de développement pour l'application React
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code de l'application dans le conteneur
COPY . .

# Exposer le port 3000 (port par défaut du serveur de développement React)
EXPOSE 3000

# Lancer le serveur de développement avec rechargement à chaud
ENV NODE_ENV=development
CMD ["npm", "start"]

