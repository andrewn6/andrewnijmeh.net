ARG node-version=12

FROM node:12

WORKDIR /api

COPY package*.json /

RUN npm install

RUN echo "Installed node modules"

EXPOSE 5050

CMD ["node", "server.js"]