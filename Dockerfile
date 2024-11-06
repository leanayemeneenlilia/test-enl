# Étape 1: Utiliser une image Node pour le développement
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers de dépendances d'abord pour tirer parti du cache Docker
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code de l'application
COPY . .

# Exposer le port 3000 pour le serveur de développement React
EXPOSE 3000

# Démarrer l'application en mode développement avec rechargement à chaud
CMD ["npm", "start"]
