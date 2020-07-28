#!/bin/bash

echo "Installing Apache 2.4 ..."

sudo apt-get update
sudo apt-get -y install apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi