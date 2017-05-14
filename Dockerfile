FROM node:7.8.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN yarn install

CMD ["npm", "run","start"]