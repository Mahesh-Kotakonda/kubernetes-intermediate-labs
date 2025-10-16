# Use Node.js 18 Alpine
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json first (for dependency install)
COPY app/package*.json ./

# Install production dependencies
RUN npm install --production

# Copy all backend app code into container
COPY app/ .

# Expose port backend uses
EXPOSE 8080

# Start the backend server
CMD ["node", "index.js"]
