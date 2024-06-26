# Use the official Node.js image based on Alpine Linux as the base image
FROM node:16-alpine

# Expose the port the app runs on
EXPOSE 3000

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN npm install 

CMD npm start

