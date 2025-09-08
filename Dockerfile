#stage 1: Build app
FROM node:23-apline AS build

#set working directory
WORKDIR /app

#install dependencies
COPY package.json package-lock.json ./
RUN npm install

#copy application files
COPY . .

#Build the app
RUN npm run build

#stage 2: Nginx serve
FROM nginx:alpine

# Copy build output to nginx html dir
COPY --from=build /app/dist /usr/share/nginx/html

# Expose your dev server port (adjust if different)
EXPOSE 80

# Start app in dev mode
CMD ["nginx", "-g", "daemon off;"]