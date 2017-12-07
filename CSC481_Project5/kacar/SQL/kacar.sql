-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 07, 2017 at 11:42 PM
-- Server version: 5.7.20-log
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kacar`
--

-- --------------------------------------------------------

--
-- Table structure for table `booked_vehicles`
--

DROP TABLE IF EXISTS `booked_vehicles`;
CREATE TABLE IF NOT EXISTS `booked_vehicles` (
  `vehicleid` int(11) NOT NULL,
  `renterid` int(11) NOT NULL,
  KEY `renteid_idx` (`vehicleid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pic_dir`
--

DROP TABLE IF EXISTS `pic_dir`;
CREATE TABLE IF NOT EXISTS `pic_dir` (
  `vehicleid` int(11) NOT NULL,
  `directory` varchar(200) NOT NULL,
  KEY `vehicleid_idx` (`vehicleid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pic_dir`
--

INSERT INTO `pic_dir` (`vehicleid`, `directory`) VALUES
(1, './img/1/P1020034.jpg'),
(1, './img/1/P1020035.jpg'),
(1, './img/1/P1020036.jpg'),
(1, './img/1/P1020037.jpg'),
(1, './img/1/P1020038.jpg'),
(1, './img/1/P1020039.jpg'),
(2, './img/2/specb_forsale_01.jpg'),
(2, './img/2/specb_forsale_02.jpg'),
(2, './img/2/specb_forsale_03.jpg'),
(2, './img/2/specb_forsale_04.jpg'),
(3, './img/3/honda_fit_hybrid_1.jpg'),
(3, './img/3/honda_fit_hybrid_2.jpg'),
(3, './img/3/honda_fit_hybrid_3.jpg'),
(3, './img/3/honda_fit_hybrid_4.jpg'),
(3, './img/3/honda_fit_hybrid_5.jpg'),
(4, './img/4/4runner_1.jpg'),
(4, './img/4/4runner_2.jpg'),
(4, './img/4/4runner_3.jpg'),
(4, './img/4/4runner_4.jpg'),
(5, './img/5/IMG_1181.jpg'),
(5, './img/5/IMG_1182.jpg'),
(5, './img/5/IMG_1185.jpg'),
(5, './img/5/IMG_1186.jpg'),
(5, './img/5/IMG_1187.jpg'),
(6, './img/6/yaris_327421.jpg'),
(6, './img/6/yaris_327422.jpg'),
(6, './img/6/yaris_327423.jpg'),
(6, './img/6/yaris_327424.jpg'),
(6, './img/6/yaris_327425.jpg'),
(6, './img/6/yaris_327426.jpg'),
(7, './img/7/mercedes_1.jpg'),
(7, './img/7/mercedes_2.jpg'),
(7, './img/7/mercedes_3.jpg'),
(8, './img/8/P2020034.jpg'),
(8, './img/8/P2020035.jpg'),
(8, './img/8/P2020036.jpg'),
(8, './img/8/P2020037.jpg'),
(8, './img/8/P2020038.jpg'),
(8, './img/8/P2020039.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `renter_status` bit(1) DEFAULT NULL,
  `profile_pic_dir` varchar(45) DEFAULT NULL,
  `phone_number` varchar(12) NOT NULL,
  `address` varchar(45) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `fname`, `lname`, `email`, `password`, `renter_status`, `profile_pic_dir`, `phone_number`, `address`) VALUES
(1, 'Anthony', 'Vilanova', 'avilanova1@toromail.csudh.edu', 'password', b'0', NULL, '562-555-4321', '20 Maple Avenue, San Pedro, CA 90731'),
(2, 'Josh', 'Lopez', 'jlopez@aol.com', 'password', b'0', NULL, '251-546-9442', '7 W. Adams Lane, San Jose, CA 95116'),
(3, 'Mangar', 'Teneg', 'mangar@yahoo.com', 'password', b'1', NULL, '630-446-8851', '7246 W. Windsor Dr, Carmichael, CA 95608'),
(4, 'Lindsay', 'Mason', 'lindsay_mason@yahoo.com', 'password', b'1', NULL, '125-546-4478', '601 Sherwood Ave, San Bernardino, CA 92404'),
(5, 'Abel', 'Moss', 'abel_moss@yahoo.com', 'password', b'1', NULL, '226-906-2721', '1 East Bayberry Street, Hanford, CA 93230'),
(6, 'Sergio', 'Jones', 'sergio_jones@yahoo.com', 'password', b'1', NULL, '949-569-4371', '241 Indian Spring St, Pittsburg, CA 94565'),
(7, 'Judy', 'Klein', 'judy_klein@yahoo.com', 'password', b'1', NULL, '630-446-8851', '396 Franklin Street, Union City, CA 94587'),
(8, 'Dallas', 'Francis', 'dallas_francis@yahoo.com', 'password', b'1', NULL, '226-906-2721', '42 Marlborough Rd, Los Angeles, CA 90004'),
(9, 'Dean', 'Watson', 'dean_watson@yahoo.com', 'password', b'1', NULL, '671-925-1352', '510 SW. Roehampton St, Fremont, CA 94538'),
(10, 'Maureen', 'West', 'maureen_west@yahoo.com', 'password', b'1', NULL, '832-646-3053', '8195 Durham Street, Lancaster, CA 93535'),
(11, 'Raul', 'Bush', 'raul_bush@yahoo.com', 'password', b'1', NULL, '486-586-4387', '7390 Brickell St, Vista, CA 92083'),
(12, 'Jan', 'Bush', 'jan_tucker@yahoo.com', 'password', b'1', NULL, '764-615-5246', '9654 Mill St, North Hills, CA 91343'),
(13, 'Constance', 'Strickland', 'constance_strickland@yahoo.com', 'password', b'1', NULL, '680-215-4845', '601 Trenton Dr, Long Beach, CA 90813'),
(14, 'mark', 'sanchez', 'msanchez@gmail.com', 'password', b'0', NULL, '493-994-2403', '8429 Jennings Ave, Corona, CA 92882');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE IF NOT EXISTS `vehicles` (
  `vehicleid` int(11) NOT NULL AUTO_INCREMENT,
  `ownerid` int(11) NOT NULL,
  `make` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` varchar(45) NOT NULL,
  `vin` varchar(45) NOT NULL,
  `miles` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `date_available_start` date DEFAULT NULL,
  `date_available_end` date DEFAULT NULL,
  PRIMARY KEY (`vehicleid`),
  UNIQUE KEY `vin_UNIQUE` (`vin`),
  KEY `ownerid_idx` (`ownerid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`vehicleid`, `ownerid`, `make`, `model`, `year`, `vin`, `miles`, `price`, `date_available_start`, `date_available_end`) VALUES
(1, 1, 'BMW', '3 Series 335i', '2008', 'KNAFT4A24B5324483', 10000, 51, '2017-12-09', '2017-12-14'),
(2, 1, 'Subaru', 'Legacy', '2007', '1FTRF18W41NA79732', 25000, 37, '2017-12-05', '2017-12-10'),
(3, 2, 'Honda', 'Fiat', '2012', '1FV3HFBA2VL612497', 20000, 35, '2017-12-01', '2018-01-01'),
(4, 3, 'Toyota', '4Runner', '2006', '1GKET12S456261108', 5503, 43, '2017-12-13', '2018-02-08'),
(5, 4, 'Toyota', 'Corolla', '2016', '3GCUKREH2EG405648', 2503, 49, '2017-10-11', '2017-12-23'),
(6, 5, 'Toyota', 'Yaris', '2016', '2GDGG35N8L4595988', 1503, 42, '2017-12-08', '2017-12-29'),
(7, 6, 'Mercedes Benz', '320SL Convertible Roadster', '1997', '3GCUKSE20CG267091', 111503, 39, '2017-12-03', '2018-01-10'),
(8, 7, 'Honda', 'Civic', '2017', '1FDKF37M0PNA75209', 503, 49, '2017-11-08', '2017-12-13');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booked_vehicles`
--
ALTER TABLE `booked_vehicles`
  ADD CONSTRAINT `renteid` FOREIGN KEY (`vehicleid`) REFERENCES `vehicles` (`vehicleid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pic_dir`
--
ALTER TABLE `pic_dir`
  ADD CONSTRAINT `vehicleid` FOREIGN KEY (`vehicleid`) REFERENCES `vehicles` (`vehicleid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `ownerid` FOREIGN KEY (`ownerid`) REFERENCES `user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
