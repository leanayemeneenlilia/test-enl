# Étape 1: Construction de l'application React
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code de l'application dans le conteneur
COPY . .

# Exécuter le build de l'application React
RUN npm run build

# Étape 2: Serveur pour l'application React
FROM nginx:alpine

# Copier les fichiers de build générés dans le répertoire Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
