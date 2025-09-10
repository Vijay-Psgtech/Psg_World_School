# Stage 1: Build the app
FROM node:23-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build optimized production files
RUN npm run build


# Stage 2: Nginx Serve
FROM nginx:alpine

# Create the required folder structure
RUN mkdir -p /usr/share/nginx/html/Psg_World_school/dist

# Copy the built files into the expected Nginx path
COPY --from=build /app/dist /usr/share/nginx/html/Psg_World_school/dist

# Copy custom nginx.conf (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 9000

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
