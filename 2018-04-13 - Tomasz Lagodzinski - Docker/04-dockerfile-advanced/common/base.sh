#!/bin/bash

for i in $(seq 1 10);
do
	if [ "$i" -eq 1 ]; then
		echo "I'm doing something important $i time"
	else
		echo "I'm doing something important $i times"
	fi
done