ARG node-version=12

FROM node:12

WORKDIR /api

COPY package*.json /

RUN npm install


EXPOSE 8081

CMD ["npm start", "index.js"]