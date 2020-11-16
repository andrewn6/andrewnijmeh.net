ARG nginx-version=1.15

FROM nginx:${nginx-version}}

RUN mkdir website

RUN cd website

RUN git pull https://github.com/andrewnijmeh/andrewnijmeh.net.git

RUN cd andrewnijmeh.net-rewrite-react

COPY /nginx/nginx.conf /



