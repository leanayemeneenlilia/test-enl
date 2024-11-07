# Étape de build
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --frozen-lockfile  # Utiliser frozen-lockfile pour éviter des mises à jour de package

# Copier le code de l'application après l'installation des dépendances
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape de production - Serveur Nginx
FROM nginx:alpine

# Copier les fichiers build depuis l'étape de build
COPY --from=build /app/build /usr/share/nginx/html

# Configurer Nginx (facultatif si vous avez un fichier de config personnalisé)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
