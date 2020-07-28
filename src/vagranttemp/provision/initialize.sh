#!/bin/bash

echo "Initializing system for the development environment"

###############
# Initialize DB
###############
mysql -h sql.l-translate.local -uroot -proot --execute="CREATE DATABASE IF NOT EXISTS l_translate;"
mysql -h sql.l-translate.local -uroot -proot l_translate < /vagrant/.vagrant/provision/resources/l_translate.sql

##############
# Run Composer
##############
#cd /var/www
#COMPOSER=/vagrant/.vagrant/provision/resources/composer-l-translate.local.json composer install

