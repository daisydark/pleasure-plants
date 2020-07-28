#!/bin/bash

echo "Installing Composer"

sudo apt-get -y install curl git unzip
cd
curl -sS https://getcomposer.org/installer -o composer-setup.php
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
