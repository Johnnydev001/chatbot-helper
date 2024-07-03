FROM node:18-alpine

WORKDIR /app

COPY packge*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

