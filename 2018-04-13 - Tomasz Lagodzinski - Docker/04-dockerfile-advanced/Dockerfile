FROM alpine:3.7

RUN apk upgrade --update --no-cache && \
    apk add --no-cache curl bash sed tini coreutils jq ca-certificates wget && \
    rm -rf  /tmp/* /var/cache/apk/* && \
    mkdir -p /aem/crx-quickstart/install && \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub && \
    wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.26-r0/glibc-2.26-r0.apk && \
    apk add --no-cache glibc-2.26-r0.apk  && \
    wget -q --no-check-certificate -c --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-linux-x64.tar.gz -O /aem/jdk.tar.gz && \
    tar xvf /aem/jdk.tar.gz > /dev/null

WORKDIR /src

COPY common/base.sh /src/

RUN chmod +x /src/base.sh && \
    /src/base.sh

COPY common/docker-entrypoint.sh /

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["/docker-entrypoint.sh"]