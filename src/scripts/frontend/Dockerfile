FROM python:3.6-buster

WORKDIR /scripts/frontend /

COPY /scripts/frontend /

COPY requirements.txt . 

RUN pip3 install -r requirements.txt 

ENTRYPOINT [ "python" ]

