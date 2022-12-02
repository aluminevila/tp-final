-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 02-12-2022 a las 01:28:26
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `cabanas-bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE IF NOT EXISTS `servicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `titulo`, `img_id`) VALUES
(13, 'prueba1', 'nmekw4aakjypzdn3pqq1'),
(17, NULL, 'ov0imodnfjc2cmcevj2q'),
(19, '', 'erifflhpxpownmrzofax'),
(20, 'c2x2', 's2xqs0umto9akf2qfisn'),
(21, 'cabaña2x03', 'lmzkblyn5gjcnmlw7rfk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'alumine', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'luna', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
