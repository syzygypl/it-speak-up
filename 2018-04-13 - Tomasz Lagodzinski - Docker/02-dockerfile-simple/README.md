# Simple nodejs based Dockerfile

## About

This Dockerfile uses centos from the 6 family and nodejs, to build a hello world app with nodejs as runtime

## Usage

```bash
docker build -t simple .
docker run -ti -p 8080:8080 simple
```