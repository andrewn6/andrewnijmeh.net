FROM python:3.6-buster

WORKDIR /scripts/frontend /

COPY /scripts/backend /

COPY requirements.txt . 

RUN pip3 install -r requirements.txt 

ENTRYPOINT [ "python" ]

