# Inheritance example

## About

This example shows basic image inheritance.

## Usage

```bash
docker build -t base-example .
docker build -t extended -f extended.dockerfile .
docker run -ti -p 8080:8080 extended
```