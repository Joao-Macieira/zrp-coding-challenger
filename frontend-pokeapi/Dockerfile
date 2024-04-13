FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 5173

CMD [ "npm", "run", "preview" ]
