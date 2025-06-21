-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2025 at 02:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ranking`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(50) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `model`, `description`, `price`, `image`) VALUES
(1, 'Axforce 10', 'Lining', 'Racket', 'The Axforce 10 combines explosive power with precise control, featuring a 7.0mm slim flexible shaft that reduces air resistance for lightning-fast swings. Its head-heavy balance delivers unstoppable force in every smash, while the Sonic Boom System amplifies both the sound and feel of impact. Built with a durable carbon fiber frame, this racket is designed for fast-paced plays seeking speed, power, and precision in every shot.', 850000, 'racket lining axforce 10.jpg'),
(2, 'Windstorm 72 Speed', 'Lining', 'Racket', 'The Windstorm 72 Speed is designed for players who demand lightning-fast reactions and pinpoint accuracy in all games. With an ultra-lightweight design weighing only 72g, this racket lives up to its name, allowing for quick, agile movements on the court. The 6.8mm soft flexible shaft boosts your speed and control, making it excellent for fast-paced gaming.', 1400000, 'racket lining windstorm 72 speed.jpg'),
(3, 'Baggaria A15', 'Felet', 'Racket', 'Felet Baggaria A5 is an entry‑level racket from the Felet brand, designed for beginners to intermediate players. This racket comes in the Moderate series with a balance that supports an all-round playing style—suitable for players who focus on control and accuracy.', 500000, 'racket felet baggaria.jpg'),
(4, 'SHB 65 Z4', 'Yonex', 'Shoes', 'These Yonex badminton shoes are designed for players seeking stability, grip, and breathability on the court. Built with a mesh upper and rubber outsole, they offer excellent traction and lightweight comfort—ideal for fast-paced games and dynamic footwork.', 1800000, 'shoes_yonex_shb65z4.jpg'),
(5, 'Beast-X', 'Hundred', 'Shoes', 'Meet the Beast X—where ruthless agility meets uncompromising support. Dominate every rally with Aero Mesh, engineered for breathability and flexible lockdown that adapts to your swiftest moves. Feel the power of X Cushion technology, delivering shock absorption and energy return with every explosive step.', 600000, 'sepatu_hundred_beast.jpg'),
(6, 'Starter III', 'Young', 'Shoes', 'Anti-slip and wear-resistant rubber makes the ideal material for the soles of badminton shoes, while the mid-foot part requires excellent shock absorption and elasticity. Increase stability on the outside of the shoes to keeps you in complete control of your confident movement. The TPU Outsole also provides slip resistance for uneven and slippery surfaces.', 500000, 'shoes young.jpg'),
(7, 'AREC-D818', 'Apacs', 'Bag', 'Excellent quality rectangular holdall, measuring 73cm long x 31cm high x 10 +10cm wide. Two main pockets plenty of space for rackets, shuttlecocks, shoes, towel and a change of clothing.  Silver foil for racket protection and inner lining. Outside pocket suitable for grips, keys and cash.  Stunning looking bag in a dual colourway design.  Amazing price for a  superb quality bag.', 750000, 'bag apacs.jpg'),
(8, 'Tournament Pack', 'Felet', 'Bag', 'The Felet Tournament Pack is a sleek and practical badminton bag designed for players who need smart storage for their gear. With its stylish white and blue color scheme and efficient compartmental design, this bag fits up to 4 rackets, clothing, and accessories—perfect for practice sessions or tournaments.\r\nSize : 73 cm x 24 cm x 30 cm', 700000, 'bag felet.jpeg'),
(9, 'Pro Racket Bag', 'Young', 'Bag', 'Fits 12 pieces of badminton rackets and comes with thermo and shoes compartments so that you can store and organise your gear in style.\r\n\r\n', 850000, 'bag young.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
