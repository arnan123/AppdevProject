-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2021 at 02:11 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cook`
--

-- --------------------------------------------------------

--
-- Table structure for table `dishes`
--

CREATE TABLE `dishes` (
  `dishID` bigint(20) NOT NULL,
  `dishName` varchar(255) NOT NULL,
  `dishDescription` varchar(510) NOT NULL,
  `dishMenu` enum('Breakfast','Lunch','Dinner') NOT NULL,
  `dishPic` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dishes`
--

INSERT INTO `dishes` (`dishID`, `dishName`, `dishDescription`, `dishMenu`, `dishPic`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Chicken Adobo', 'In a large kettle combine the chicken, the vinegar, the garlic, the bay leaves, the peppercorns, and 1 cup water, bring the mixture to a boil, and simmer it, covered, for 20 minutes. Add the soy sauce and simmer the mixture, covered, for 20 minutes. Trans', 'Dinner', 'storage/Dishes/ChickenAdobo.jpg', '2021-05-18 20:10:25', '2021-05-18 20:10:25', NULL),
(2, 'Bicol Express', 'Bicol Express is pure comfort food! With pork cubes cooked in coconut milk and chili peppers, it’s rich, creamy, spicy and delicious! Serve with steamed rice for a hearty and big flavored meal!', 'Lunch', 'storage/Dishes/BicolExpress.jpg', '2021-05-18 20:10:48', '2021-05-18 20:10:48', NULL),
(3, 'Chop Suey', 'Chop Suey is a stir-fried vegetable dish that is cooked with meats such as chicken and pork. Shrimp and seafood can also be added. This chop suey recipe is special because it has almost every ingredient present. Chicken, pork, shrimp, and boiled quail eggs were all included in the recipe, along with fresh veggies.', 'Lunch', 'storage/Dishes/ChopSuey.jpg', '2021-05-18 14:00:53', '2021-05-18 14:00:53', NULL),
(4, 'Sinigang', 'Sinigang na Hipon is a type of Filipino sour soup, wherein shrimp is used as the main ingredient. This dish also includes a variety of vegetables such as daikon radish, snake beans, okra, and eggplant. This dish is best served during cold weather. It is b', 'Lunch', 'storage/Dishes/Sinigang.jpg', '2021-05-14 06:42:56', '2021-05-14 06:42:56', NULL),
(5, 'Banana Fritter', 'Banana Fritter is a type of Filipino snack. It is a fried concoction made from ripe  “Saba” banana or plantains. The bananas can either be sliced or mashed. It is then mixed with a batter composed of flour, sugar, vanilla, and egg. A fritter is defines as a mixture (such as a batter) that includes either fruit or meat. Maruya obviously falls under the category.', 'Breakfast', 'storage/Dishes/BananaFritter.jpg', '2021-05-18 11:00:52', '2021-05-18 11:00:52', NULL),
(6, 'Arroz Caldo', 'Arroz Caldo literally means warm rice. This congee that closely resembles risotto has been a favorite Filipino snack. What goes with arroz caldo? I enjoy pairing it with tokwat baboy, which is a combination of boiled pork slices and fried tofu soaked in a vinegar mixture.', 'Breakfast', 'storage/Dishes/ArrozCaldo.jpg', '2021-05-18 11:05:55', '2021-05-18 11:05:55', NULL),
(7, 'Hotsilog', 'Hotsilog is a meal composed of hotdogs, garlic fried rice, and fried egg. In a Filipino household, this is commonly eaten for breakfast with a condiment of banana ketchup and some pickled shredded papaya (atchara) on the side.', 'Breakfast', 'storage/Dishes/Hotsilog.jpg', '2021-05-18 11:09:54', '2021-05-18 11:09:54', NULL),
(8, 'Beef Teriyaki Tapa with Fried Rice and Egg', 'Beef teriyaki tapa with fried egg is another version of tapsilog that I want to share with you. This makes use of beef steak (that was sliced thinly) and our homemade teriyaki sauce. The result is a delicious sweet tapsilog that I always enjoy to have.', 'Breakfast', 'storage/Dishes/BeefTeriyaki.jpg', '2021-05-18 11:15:02', '2021-05-18 11:15:02', NULL),
(9, 'Corned Beef Silog', 'Corned Beef Silog is a meal composed of sautéed corned beef with onion, garlic fried rice, and fried egg. The corned beef used in this recipe are the ones in can. I used a Filipino brand, which was really good. On the other hand, I used leftover rice to make the sinangag. I also got some fresh eggs to fry.', 'Breakfast', 'storage/Dishes/CornedBeefSilog.jpg', '2021-05-18 11:13:35', '2021-05-18 11:13:35', NULL),
(10, 'Special Longanisa Fried Rice', 'A good heavy breakfast such as special longanisa fried rice gives me enough energy to start my day. It felt like my taste buds were awakened by its yummy taste. I did not expect to be pampered so early in the morning, but that was how I felt. I can get used to this feeling every day, with a bit of variation.', 'Breakfast', 'storage/Dishes/SpecialLonganisaFriedRice.jpg', '2021-05-18 11:11:59', '2021-05-18 11:11:59', NULL),
(11, 'Loaded Breakfast Potato', 'Your day should start with a good and filling breakfast in order to gain strength to face all the challenges ahead. Loaded Breakfast Potato is  a perfect dish that you can make to help you get ready for your day. It is packed with energy and tastes really good.', 'Breakfast', 'storage/Dishes/LoadedBreakfastPotato.jpg', '2021-05-18 11:18:06', '2021-05-18 11:18:06', NULL),
(12, 'Crispy Pork Belly Chips', 'Who doesn’t enjoy a bag of chips every now and then? These make for a versatile snack that’s easy to eat, and are just as easy on the taste buds. But imagine if you could enhance your bowl of chips further, and add an irresistible factor of meatiness and savor. The answer to those tasty wonders lies in these Crispy Pork Belly Chips!', 'Dinner', 'storage/Dishes/CrispyPorkBellyChips.jpg', '2021-05-18 13:54:10', '2021-05-18 13:54:10', NULL),
(13, 'Pata Tim', 'Brimming in a pork stew infused with aromatic peppercorn, sesame oil and soy sauce, Pata Tim is a classic Filipino dish with traces in Chinese cuisine. Its name actually originates from “Pata Itim”, which, when translated from Filipino to English, means “black pork hock”. The dish is said to be an evolved adaptation of the Chinese red braised pork dish. This red braised pork, also known as Hong Shao Rou, similarly utilizes pork and a savory, thick sauce. This is to give the meat and accompanying side dish', 'Dinner', 'storage/Dishes/PataTim.jpg', '2021-05-18 14:02:25', '2021-05-18 14:02:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dish_ingredients`
--

CREATE TABLE `dish_ingredients` (
  `dishIngID` int(11) NOT NULL,
  `dishID` bigint(20) NOT NULL,
  `ingredientID` bigint(20) NOT NULL,
  `amount` float NOT NULL,
  `measurement` enum('teaspoon','cup','whole','part','pound') NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dish_ingredients`
--

INSERT INTO `dish_ingredients` (`dishIngID`, `dishID`, `ingredientID`, `amount`, `measurement`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 8, 'whole', NULL, NULL, NULL),
(2, 1, 2, 2, 'teaspoon', NULL, NULL, NULL),
(3, 1, 3, 3, 'part', NULL, NULL, NULL),
(4, 1, 4, 2, 'whole', NULL, NULL, NULL),
(5, 1, 5, 2, 'teaspoon', NULL, NULL, NULL),
(6, 1, 6, 0.75, 'cup', NULL, NULL, NULL),
(7, 1, 7, 9, 'teaspoon', NULL, NULL, NULL),
(8, 2, 8, 3, 'teaspoon', NULL, NULL, NULL),
(9, 2, 9, 1, 'whole', NULL, NULL, NULL),
(10, 2, 10, 2, 'pound', NULL, NULL, NULL),
(11, 2, 11, 6, 'teaspoon', NULL, NULL, NULL),
(12, 2, 12, 1, 'cup', NULL, NULL, NULL),
(13, 2, 13, 1, 'cup', NULL, NULL, NULL),
(14, 2, 14, 14, 'whole', NULL, NULL, NULL),
(15, 2, 15, 2, 'cup', NULL, NULL, NULL),
(16, 2, 16, 1, 'cup', NULL, NULL, NULL),
(17, 2, 17, 1, 'part', NULL, NULL, NULL),
(18, 2, 5, 1, 'part', NULL, NULL, NULL),
(19, 4, 19, 1, 'pound', '2021-05-14 07:14:44', NULL, NULL),
(20, 4, 20, 1, 'whole', '2021-05-14 07:14:44', NULL, NULL),
(21, 4, 22, 15, 'whole', '2021-05-14 07:16:04', NULL, NULL),
(22, 4, 21, 0.25, 'pound', '2021-05-14 07:16:04', NULL, NULL),
(23, 4, 23, 5, 'whole', '2021-05-14 07:17:17', NULL, NULL),
(24, 4, 24, 1, 'whole', '2021-05-14 07:17:17', NULL, NULL),
(25, 4, 25, 1, 'cup', '2021-05-14 07:17:47', NULL, NULL),
(26, 4, 26, 1, 'whole', '2021-05-14 07:17:47', NULL, NULL),
(27, 4, 15, 3, 'whole', '2021-05-14 07:18:23', NULL, NULL),
(28, 4, 9, 1, 'whole', '2021-05-14 07:18:23', NULL, NULL),
(29, 4, 13, 8, 'cup', '2021-05-14 07:19:23', NULL, NULL),
(30, 4, 28, 1, 'part', '2021-05-14 07:19:23', NULL, NULL),
(31, 4, 5, 1, 'part', '2021-05-14 07:19:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `ingredientID` bigint(20) NOT NULL,
  `ingredientName` varchar(255) NOT NULL,
  `ingredientDescription` varchar(510) NOT NULL,
  `ingredientType` enum('Spice/Seasoning','Meat','Vegetable/Fruit','Basic') NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`ingredientID`, `ingredientName`, `ingredientDescription`, `ingredientType`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Chicken Legs', 'A meat part of a chicken.', 'Meat', NULL, NULL, NULL),
(2, 'White Vinegar', 'White vinegar is a solution typically consisting of 4–7% acetic acid and 93–96% water, though types with higher acetic acid content are available for agricultural or cleaning purposes. It\'s most commonly made via the fermentation of grain alcohol.', 'Spice/Seasoning', NULL, NULL, NULL),
(3, 'Garlic', 'Garlic is an herb that is grown around the world. It is related to onion, leeks, and chives. It is thought that garlic is native to Siberia, but spread to other parts of the world over 5000 years ago.', 'Spice/Seasoning', NULL, NULL, NULL),
(4, 'Bay Leaves', 'The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole or in a dried or ground form.', 'Spice/Seasoning', NULL, NULL, NULL),
(5, 'Black Pepper', 'Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning.', 'Spice/Seasoning', NULL, NULL, NULL),
(6, 'Soy Sauce', 'Soy sauce is a liquid condiment of Chinese origin, traditionally made from a fermented paste of soybeans, roasted grain, brine, and Aspergillus oryzae or Aspergillus sojae molds. It is considered to contain a strong umami flavor.', 'Spice/Seasoning', NULL, NULL, NULL),
(7, 'Vegetable Oil', 'Vegetable oils, or vegetable fats, are oils extracted from seeds or from other parts of fruits. Like animal fats, vegetable fats are mixtures of triglycerides.', 'Basic', NULL, NULL, NULL),
(8, 'Canola Oil', 'Canola oil is a vegetable oil derived from a variety of rapeseed that is low in erucic acid, as opposed to colza oil.', 'Basic', NULL, NULL, NULL),
(9, 'Onion', 'The onion also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.', 'Spice/Seasoning', NULL, NULL, NULL),
(10, 'Pork Belly', 'Belly part of a Pig.', 'Meat', NULL, NULL, NULL),
(11, 'Shrimp Paste', 'Shrimp paste or prawn sauce is a fermented condiment commonly used in Southeast Asian and Southern Chinese cuisines.', 'Spice/Seasoning', NULL, NULL, NULL),
(12, 'Coconut Milk', 'The juice of a coconut fruit.', 'Spice/Seasoning', NULL, NULL, NULL),
(13, 'Water', 'Basic ingredient for cooking.', 'Basic', NULL, NULL, NULL),
(14, 'Thai Chili Peppers', 'Thai chili is a chili pepper, a variety from the species Capsicum annuum, commonly found in Ethiopia and across Southeast Asia. It is used extensively in many Asian cuisines.', 'Spice/Seasoning', NULL, NULL, NULL),
(15, 'Long Pepper', 'Finger chili or long pepper, is one of two kinds of chili common to the Philippines and Filipino cuisine, the other being siling labuyo.', 'Spice/Seasoning', NULL, NULL, NULL),
(16, 'Coconut Cream', 'A processed product made from a coconut fruit.', 'Spice/Seasoning', NULL, NULL, NULL),
(17, 'Salt', 'Basic ingredient for cooking', 'Basic', NULL, NULL, NULL),
(19, 'Shrimp', 'Shrimp and prawn are types of seafood that are consumed worldwide. Although shrimp and prawns belong to different suborders of Decapoda, they are very similar in appearance and the terms are often used interchangeably in commercial farming and wild fisher', 'Meat', '2021-05-14 06:57:01', NULL, NULL),
(20, 'Knorr Sinigang sa Sampaloc Mix', 'A seasoning for sour flavor.', 'Spice/Seasoning', '2021-05-14 06:57:01', NULL, NULL),
(21, 'Kangkong', 'Kangkong or water spinach is one of the very familiar green leafy vegetables used in the South and South-East Asian cuisine. Its gently sweet, mucilaginous, succulent leaves and stems are very much sought-after in the salads, braised and stir-fries.', 'Vegetable/Fruit', '2021-05-14 07:01:42', NULL, NULL),
(22, 'Asparagus beans', 'The asparagus bean is a legume cultivated for its edible green pods containing immature seeds, like the green bean. It is also known as the yardlong bean, long-podded cowpea, Chinese long bean, bodi/bora, snake bean, or pea bean.', 'Vegetable/Fruit', '2021-05-14 07:02:23', NULL, NULL),
(23, 'Okra', 'Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies\' fingers or ochro, is a flowering plant in the mallow family. It is valued for its edible green seed pods. It is a good source of minerals, vitamins, antioxidants, and fiber.', 'Vegetable/Fruit', '2021-05-14 07:02:23', NULL, NULL),
(24, 'Eggplant', 'Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines.', 'Vegetable/Fruit', '2021-05-14 07:03:46', NULL, NULL),
(25, 'Daikon Radish', 'Daikon or mooli, Raphanus sativus var. longipinnatus, is a mild-flavored winter radish usually characterized by fast-growing leaves and a long, white, napiform root.', 'Vegetable/Fruit', '2021-05-14 07:03:46', NULL, NULL),
(26, 'Tomato', 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.', 'Vegetable/Fruit', '2021-05-14 07:04:52', NULL, NULL),
(27, '', '', 'Spice/Seasoning', '2021-05-14 07:04:52', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Fish Sauce', 'Fish sauce is a liquid condiment made from fish or krill that have been coated in salt and fermented for up to two years.', 'Spice/Seasoning', '2021-05-14 07:09:13', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210514030611-create_dishes_table.js'),
('20210514032029-create_ingredients_table.js'),
('20210514033700-create_dish_ingredients_table.js');

-- --------------------------------------------------------

--
-- Table structure for table `washdish`
--

CREATE TABLE `washdish` (
  `dishID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `washdish`
--

INSERT INTO `washdish` (`dishID`) VALUES
(1),
(2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dishes`
--
ALTER TABLE `dishes`
  ADD PRIMARY KEY (`dishID`);

--
-- Indexes for table `dish_ingredients`
--
ALTER TABLE `dish_ingredients`
  ADD PRIMARY KEY (`dishIngID`),
  ADD KEY `dishID` (`dishID`),
  ADD KEY `ingredientID` (`ingredientID`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`ingredientID`),
  ADD UNIQUE KEY `ingredientName` (`ingredientName`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `washdish`
--
ALTER TABLE `washdish`
  ADD PRIMARY KEY (`dishID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dishes`
--
ALTER TABLE `dishes`
  MODIFY `dishID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `dish_ingredients`
--
ALTER TABLE `dish_ingredients`
  MODIFY `dishIngID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `ingredientID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `washdish`
--
ALTER TABLE `washdish`
  MODIFY `dishID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dish_ingredients`
--
ALTER TABLE `dish_ingredients`
  ADD CONSTRAINT `dish_ingredients_ibfk_1` FOREIGN KEY (`dishID`) REFERENCES `dishes` (`dishID`),
  ADD CONSTRAINT `dish_ingredients_ibfk_2` FOREIGN KEY (`ingredientID`) REFERENCES `ingredients` (`ingredientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
