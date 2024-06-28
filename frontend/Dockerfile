# Base node js image
FROM node:18-alpine

# Create app directory
WORKDIR /app
COPY package.json package-lock.json ./

# Install Vite dependency
RUN npm install -D vite

# Copy contents of frontend directory to /app
COPY . .

# Expose port 3000
EXPOSE 3000

CMD ["yarn", "dev", "--host"]
