FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY next.config.js ./next.config.js


COPY pages ./pages
COPY public ./public
COPY styles ./styles


RUN npm install

CMD ["npm","run","dev"]








