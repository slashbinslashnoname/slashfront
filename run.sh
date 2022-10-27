#/bin/bash
docker run -d -p 192.168.1.10:8081:80 --network=web --name slash-front slash-front
