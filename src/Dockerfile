
FROM node:12

WORKDIR /src
 
ADD /src/assets/images .

ADD /src/components /

ADD /src/pages /

COPY package*.json ./

RUN npm install 

RUN echo "Succesfully installed node packages"

EXPOSE 8080

RUN echo 'Expose port to port 8080'

CMD ["node", "App.js"]