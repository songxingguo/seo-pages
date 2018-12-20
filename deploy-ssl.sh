#!/usr/bin/env bash
scp -i "~/Desktop/stanMacSSH.pem" -r ./docker-compose.yml ec2-user@ec2-13-58-108-128.us-east-2.compute.amazonaws.com:/www/seo-pages
ssh -i "~/Desktop/stanMacSSH.pem" ec2-user@ec2-13-58-108-128.us-east-2.compute.amazonaws.com "cd /www/seo-pages && sudo docker-compose up -d"
