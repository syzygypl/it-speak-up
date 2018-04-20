FROM golang:latest as base

ADD web.go /src/web.go

WORKDIR /src

RUN GOOS=linux CGO_ENABLED=0 go build web.go && \
    chmod +x web

FROM scratch

COPY --from=base /src/web /web

CMD ["/web"]