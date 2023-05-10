<?php
define('SERVIDOR', 'localhost');
define('NOMBRE_BD', 'develop');
define('NAME', 'root');
define('CLAVE','');

$opciones = [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'];

try {
  $pdo = new PDO('mysql:host=' . SERVIDOR . ';dbname=' . NOMBRE_BD, NAME, $opciones);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
  $respuesta = ['Error' => 'Error: ' . $e->getMessage('Error de conexión')];
  print json_encode($respuesta);
  die();
}

if ($pdo) {
  echo 'Conexión exitosa a la base de datos.';
} else {
  echo 'No se pudo conectar a la base de datos.';
}
?>
