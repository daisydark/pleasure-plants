#!/bin/bash

echo "Global provisioning for all machines ..."

echo "Set Timezone"
sudo timedatectl set-timezone Europe/Berlin

echo "Add aliases to /etc/hosts"
grep "l-translate.local$" /etc/hosts | awk '{print $2}' | awk -F "." '{print "sed -i \x27s/" $0 "$/" $0, $1"/\x27", "/etc/hosts"}' > /tmp/addhostalias.sh
chmod +x /tmp/addhostalias.sh
sudo /tmp/addhostalias.sh

echo "Remove 127.0.0.1 entry from etc/hosts"
sudo sed -i '1s/^127/#127/' /etc/hosts