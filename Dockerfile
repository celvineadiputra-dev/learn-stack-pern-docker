FROM node:18.16.0-alpine

WORKDIR /app

RUN yarn global add nodemon

COPY package.json ./
COPY yarn.lock ./

RUN yarn

CMD ["nodemon", "--legacy-watch", "app.js"]