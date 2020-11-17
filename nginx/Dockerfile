ARG nginx-version=1.15

FROM nginx:${nginx-version}}

RUN mkdir website

RUN cd website

RUN git clone https://github.com/andrewnijmeh/andrewnijmeh.net.git

RUN cd andrewnijmeh.net

COPY /nginx/etc/nginx.conf /



