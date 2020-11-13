ARG node-version=12

FROM node:${node-version}}

WORKDIR /src
 
ADD /src/assets/images .

ADD /src/components /

ADD /src/pages /

COPY package*.json ./

RUN npm install 

RUN echo "Succesfully Installed Node Packages"

EXPOSE 8080

RUN echo 'Exposed Frontend To Port 8080'

CMD ["node", "App.js"]