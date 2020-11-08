ARG node-version=12
ARG entry-point=node
ARG file=App.js

FROM node:${node-version}

WORKDIR /src
 
ADD /src/assets/images .
ADD /src/components /
ADD /src/pages /

COPY package*.json ./

RUN npm install 

EXPOSE 8080

CMD [${entry-point}, ${file} ]