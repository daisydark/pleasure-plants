#!/bin/bash

echo "provisioning the SQL DB server"
echo "Install MariaDB on sql"
/vagrant/.vagrant/provision/packages/install-mariadb.sh

sudo mkdir -p /tmp/translate_dbdump
cd /tmp
sudo chmod -R 777 translate_dbdump