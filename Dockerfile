# Étape de build
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code de l'application
COPY . .

# Créer un build optimisé
RUN npm run build

# Étape de production : Serveur Nginx
FROM nginx:alpine

# Copier les fichiers du build vers le dossier de contenu statique de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx (la commande par défaut dans l'image Nginx fait déjà cela)
CMD ["nginx", "-g", "daemon off;"]
