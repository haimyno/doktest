# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install --production

COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
