FROM node:7.8.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package.production.json /app/package.json
RUN yarn install

COPY server.js /app/server.js
COPY index.html /app/index.html
COPY ./build/bundle.js /app/build/bundle.js

CMD ["npm", "run","start"]