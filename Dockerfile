FROM node:16.15-alpine

EXPOSE 3000

WORKDIR /app

COPY package*.json /app

RUN npm install --silent

COPY ./ /app

CMD ["npm", "run", "dev"]
