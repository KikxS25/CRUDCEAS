-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-12-2021 a las 21:30:23
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `develop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--
CREATE TABLE `citas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dia_de_audiencia` date NOT NULL,
  `hora_de_cita` time NOT NULL,
  `num_personas` int(11) NOT NULL,
  `procedencia` varchar(255) NOT NULL,
  `asunto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--
INSERT INTO `citas` (`id`, `nombre`, `apellido`, `dia_de_audiencia`, `hora_de_cita`, `num_personas`, `procedencia`, `asunto`) VALUES
(1, 'Juan', 'Pérez', '2023-05-01', '10:00:00', 2, 'CDMX', 'Asunto 1'),
(2, 'María', 'González', '2023-05-02', '11:00:00', 3, 'Toluca', 'Asunto 2'),
(3, 'Pedro', 'López', '2023-05-03', '12:00:00', 1, 'Puebla', 'Asunto 3');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dia_de_audiencia` date NOT NULL,
  `hora_de_cita` time NOT NULL,
  `num_personas` int(11) NOT NULL,
  `procedencia` varchar(255) NOT NULL,
  `asunto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `dia_de_audiencia`, `hora_de_cita`, `num_personas`, `procedencia`, `asunto`) VALUES
(1, 'Juan', 'Pérez', '2023-05-01', '10:00:00', 2, 'CDMX', 'Asunto 1'),
(2, 'María', 'González', '2023-05-02', '11:00:00', 3, 'Toluca', 'Asunto 2'),
(3, 'Pedro', 'López', '2023-05-03', '12:00:00', 1, 'Puebla', 'Asunto 3');


--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `roles`
--
ALTER TABLE `audiencias`
  ADD UNIQUE KEY `nombre_apellido_dia_hora` (`nombre`,`apellido`,`dia_de_audiencia`,`hora_de_cita`);
--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD UNIQUE KEY `nombre_apellido_dia_hora` (`nombre`,`apellido`,`díadeaudiencia`,`hora`);
--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `audiencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
  MODIFY `numdepers` int(11) NOT NULL,
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `numdepers_idx` (`numdepers`);

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ADD COLUMN `nombre` varchar(255) NOT NULL,
  ADD COLUMN `apellido` varchar(255) NOT NULL,
  ADD COLUMN `díadeaudiencia` date NOT NULL,
  ADD COLUMN `hora_de_cita` time NOT NULL,
  ADD COLUMN `numdepers` int(11) NOT NULL,
  ADD COLUMN `procedencia` varchar(255) NOT NULL,
  ADD COLUMN `asunto` varchar(255) NOT NULL,
  ADD COLUMN `id_rol` int(11) NOT NULL,
  ADD CONSTRAINT `fk_usuarios_roles` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
