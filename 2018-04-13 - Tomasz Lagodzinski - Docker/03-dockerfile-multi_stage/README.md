# Multi stage docker example

## About

This dockerfile uses the same code as the simplest example, but builds the app in a multi staged way

## Usage

```bash
docker build -t multi-stage .
docker run -ti -p 8080:8080 multi-stage
```