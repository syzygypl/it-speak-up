# An advanced example of what's possible with Dockerfiles

## About

This example installs some bogus dependencies and copies scripts to use both during build and in runtime.

It also runs until stopped.

## Usage

```bash
docker build -t advanced .
docker run -ti advanced
```