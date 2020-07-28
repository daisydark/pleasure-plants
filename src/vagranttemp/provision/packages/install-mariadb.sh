#!/bin/bash

echo "Installing MariaDB"

sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://mirror.23media.de/mariadb/repo/10.2/ubuntu xenial main'
sudo cp /vagrant/.vagrant/provision/resources/MariaDB.list /etc/apt/sources.list.d/MariaDB.list
sudo apt-get update
export DEBIAN_FRONTEND="noninteractive"
export PASSWORD="root"
sudo debconf-set-selections <<< "mariadb-server mysql-server/root_password password $PASSWORD"
sudo debconf-set-selections <<< "mariadb-server mysql-server/root_password_again password $PASSWORD"
sudo apt-get install -y mariadb-server
sudo service mysql stop
sudo sed -i 's/127.0.0.1/0.0.0.0/' /etc/mysql/my.cnf
sudo cp /vagrant/.vagrant/provision/resources/sql_mode.cnf /etc/mysql/conf.d/sql_mode.cnf
sudo cp /vagrant/.vagrant/provision/resources/optimize.cnf /etc/mysql/conf.d/optimize.cnf
sudo service mysql start
mysql -uroot -proot --execute="GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.60.%' IDENTIFIED BY 'root' WITH GRANT OPTION;"
mysql -uroot -proot --execute="GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'root' WITH GRANT OPTION;"
