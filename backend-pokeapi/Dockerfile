FROM node:18.13.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN yarn add

COPY . .

EXPOSE 3000

CMD ["yarn", "start:prod"]