FROM node:16
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . .
RUN npm install
CMD node index.js