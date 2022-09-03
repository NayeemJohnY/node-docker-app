FROM node:16
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
COPY . .
CMD node app/index.js
