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
RUN echo "Succesfully installed node packages"

EXPOSE 8080
RUN echo 'Expose port to port 8080'
CMD [${entry-point}, ${file} ]