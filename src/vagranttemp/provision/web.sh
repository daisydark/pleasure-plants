#!/bin/bash

echo "Provisioning the web server"

/vagrant/.vagrant/provision/packages/install-apache2.4.sh
/vagrant/.vagrant/provision/packages/install-php7.1-fpm.sh
/vagrant/.vagrant/provision/packages/install-composer.sh
sudo apt-get install -y mariadb-client