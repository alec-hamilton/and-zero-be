# ************************************************************
# Sequel Ace SQL dump
# Version 20031
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 5.7.37)
# Database: and-zero
# Generation Time: 2022-09-20 14:55:58 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table clubs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `clubs`;

CREATE TABLE `clubs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `club` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

LOCK TABLES `clubs` WRITE;
/*!40000 ALTER TABLE `clubs` DISABLE KEYS */;

INSERT INTO `clubs` (`id`, `club`)
VALUES
	(1,'Wangari'),
	(2,'Woods'),
	(3,'Dekker'),
	(4,'Jemison'),
	(5,'Somerville');

/*!40000 ALTER TABLE `clubs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `club` int(11) unsigned DEFAULT NULL,
  `pledge_date` date DEFAULT NULL,
  `cups_day` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_clubs` (`club`),
  CONSTRAINT `fk_users_clubs` FOREIGN KEY (`club`) REFERENCES `clubs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `email`, `club`, `pledge_date`, `cups_day`)
VALUES
	(1,'alastair.hamilton@and.digital',1,'2022-09-20',4),
	(2,'sunya.ali@and.digital',2,'2022-09-19',2),
	(3,'bobby@yahoo.com',1,'2022-08-21',10),
	(4,'stevey@yahoo.com',3,'2020-01-01',88),
	(5,'stevey@yahoo.com',3,'2020-01-01',88),
	(6,'stevey@yahoo.com',3,'2020-01-01',88);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
