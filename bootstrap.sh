#!/usr/bin/env bash
sudo apt-get update && sudo apt-get install build-essential libssl-dev
sudo apt-get install curl -y
sudo apt-get remove node -y --purge
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get -y install nodejs
