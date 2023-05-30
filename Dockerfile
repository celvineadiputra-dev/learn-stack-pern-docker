FROM node:18.16.0-alpine

WORKDIR /app

RUN yarn global add nodemon

COPY package.json ./

COPY . .

RUN yarn

RUN yarn remove bcrypt

RUN yarn add bcrypt

CMD ["nodemon", "--legacy-watch", "app.js"]