#!/usr/bin/env bash

# Mise à jour des dépots
apt-get -qq update

# Configuration de la timezone
echo "Europe/Paris" > /etc/timezone
apt-get install -y tzdata
dpkg-reconfigure -f noninteractive tzdata

# Misc
apt-get install -y rpl

# Installation de Apache et PHP
apt-get -y install libapache2-mod-php5 php5-cli
rpl "None" "All" /etc/apache2/sites-available/default
rpl "/var/www" "/vagrant/src/wordpress" /etc/apache2/sites-available/default
a2enmod rewrite
service apache2 restart

# Installation de MySQL
echo "mysql-server mysql-server/root_password password root" | debconf-set-selections
echo "mysql-server mysql-server/root_password_again password root" | debconf-set-selections
apt-get install -y mysql-server

# Installation de PhpMyAdmin
echo "phpmyadmin phpmyadmin/dbconfig-install boolean true" | debconf-set-selections
echo "phpmyadmin phpmyadmin/app-password-confirm password root" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-pass password root" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/app-pass password root" | debconf-set-selections
echo "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2" | debconf-set-selections
apt-get install -y phpmyadmin

# Correction des liens Wordpress
rpl "http://ruedesgardes.incongru.org" "http://ruedesgardes.vagrant.dev" /vagrant/src/data/fixtures/org_incongru_ruedesgardes.dump.sql

# Création de la base de données
mysql --defaults-file=/etc/mysql/debian.cnf -e "drop database if exists org_incongru_ruedesgardes"
mysql --defaults-file=/etc/mysql/debian.cnf -e "create database org_incongru_ruedesgardes default charset utf8 collate utf8_general_ci"
mysql --defaults-file=/etc/mysql/debian.cnf org_incongru_ruedesgardes < /vagrant/src/data/fixtures/org_incongru_ruedesgardes.dump.sql

# Configuration du projet
apt-get install -y ant
cd /vagrant
./composer.phar install --prefer-dist --no-progress
ant configure build -Dprofile=vagrant

# Informations
echo
echo -e "Le site est disponible à l'adresse : http://ruedesgardes.vagrant.dev/"
echo -e "L'espace d'administration Wordpress est disponible à l'adresse : http://ruedesgardes.vagrant.dev/wp-admin/"
echo -e "PhpMyAdmin est disponible à l'adresse : http://ruedesgardes.vagrant.dev/phpmyadmin/ (root / root)"
