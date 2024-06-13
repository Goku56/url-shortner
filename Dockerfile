# Stage 1: Build the application
FROM node:18-alpine AS build
COPY package*.json ./
RUN npm cache clean --force && npm install
RUN rm -rf node_modules && npm cache clean --force && npm install
COPY . .
RUN npm run build

EXPOSE 4000
CMD ["pm2-runtime", "process.json"]
