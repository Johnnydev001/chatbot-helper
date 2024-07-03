# Base node js image
FROM node:18-alpine

# Create app directory
WORKDIR /app
COPY package*.json ./

# Install Vite dependency
RUN npm install -D vite

# Copy contents of frontend directory to /app
COPY . .

RUN yarn build

# Expose port 3000
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]