#!/bin/bash

echo "Installing php7.1 fpm"

sudo add-apt-repository -y  ppa:ondrej/php
sudo apt update
sudo apt install -y php7.1-fpm php7.1-mysql php7.1-xml php7.1-curl php7.1-zip php7.1-mcrypt php7.1-intl php7.1-cli php7.1-mbstring php7.1-gd php7.1-soap php7.1-curl
sudo a2enmod actions fastcgi alias proxy_fcgi
sudo cp /vagrant/.vagrant/provision/resources/l-translate-local.conf /etc/apache2/sites-available
sudo a2dissite 000-default.conf
sudo a2ensite l-translate-local.conf
sudo systemctl reload apache2