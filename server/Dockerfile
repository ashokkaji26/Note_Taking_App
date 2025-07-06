# Use official Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose backend port
EXPOSE 5050

# Start server
CMD ["npm", "run", "dev"]