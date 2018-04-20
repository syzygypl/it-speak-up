FROM alpine:3.7

RUN apk add --no-cache nodejs nodejs-npm

ADD common /src
RUN cd /src; npm install

EXPOSE  8080
CMD node /src/index.js

