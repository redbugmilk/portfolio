FROM node:17-alpine as base

WORKDIR /api
COPY package*.json /
EXPOSE 4000

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]