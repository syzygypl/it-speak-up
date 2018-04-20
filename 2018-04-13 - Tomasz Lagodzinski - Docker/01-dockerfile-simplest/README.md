# Simplest version of Dockerfile

## About

This is the simplest possible Dockerfile, based on scratch virtual image.

## Usage

```bash
docker build -t simplest .
docker run -ti -p 8080:8080 simplest
```