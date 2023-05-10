<?php
// se requiere el archivo de conexión
require_once './Conexion.php';

// si existe el parámetro httpMethod y no está vacío
if (isset($_REQUEST['httpMethod']) && !empty($_REQUEST['httpMethod'])) {
  // se realiza una operación según el valor de httpMethod
  switch ($_REQUEST['httpMethod']) {
    case 'POST':
      // si alguno de los campos requeridos está vacío
      if (empty($_POST['nombre']) || empty($_POST['apellidos']) || empty($_POST['dia']) || empty($_POST['Hora']) || empty($_POST['phone']) || empty($_POST['procedencia']) || empty($_POST['asunto'])) {
        // se redirige al frontend con un mensaje de error
        header('Location: ../../frontend/?mensaje=Datos incompletos&clase=alert-warning');
      } else {
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $dia = $_POST['dia'];
        $hora = $_POST['Hora'];
        $phone = $_POST['phone'];
        $procedencia = $_POST['procedencia'];
        $asunto = $_POST['asunto'];
        // se prepara una sentencia SQL para insertar un nuevo usuario
        $sentencia = $pdo->prepare('INSERT INTO usuarios(nombre, apellidos, dia, Hora, phone, procedencia, asunto) VALUES (?, ?, ?, ?, ?, ?, ?)');

        // Se pasan los valores de los campos del formulario como parámetros en el orden correcto
        $sentencia->bindParam(1, $nombre);
        $sentencia->bindParam(2, $apellidos);
        $sentencia->bindParam(3, $dia);
        $sentencia->bindParam(4, $hora);
        $sentencia->bindParam(5, $phone);
        $sentencia->bindParam(6, $procedencia);
        $sentencia->bindParam(7, $asunto);
        // se ejecuta la sentencia SQL
        if ($sentencia->execute()) {
          // si la inserción ha sido exitosa, se redirige al frontend con un mensaje de éxito
          header('Location: ../../frontend/?mensaje=Registro exitoso&clase=alert-success');
        } else {
          // si ha habido un error en la inserción, se redirige al frontend con un mensaje de error
          header('Location: ../../frontend/?mensaje=Error al registrar usuario&clase=alert-danger');
        }
      }
      break;

    case 'GET':
      if (!isset($_GET['id']) || empty($_GET['id'])) {
        $sentencia = $pdo->query('SELECT id, nombre, apellidos, dia, Hora, phone, procedencia, asunto FROM usuarios;');
        $resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
      } else {
        $sentencia = $pdo->prepare('SELECT id, nombre,apellidos, dia, Hora, phone, procedencia, asunto FROM usuarios WHERE id = ?;');
        $sentencia->bindParam(1, $_GET['id']);
$sentencia->execute();
$resultado = $sentencia->fetch(PDO::FETCH_OBJ);
}
// se envía la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($resultado);
break;
case 'PUT':
  // se verifica si se ha proporcionado un id y si está vacío
  if (!isset($_REQUEST['id']) || empty($_REQUEST['id'])) {
    // si no se ha proporcionado un id, se redirige al frontend con un mensaje de error
    header('Location: ../../frontend/?mensaje=Error al actualizar usuario: no se ha proporcionado un id&clase=alert-danger');
  } else {
    // se verifica si alguno de los campos requeridos está vacío
    if (empty($_POST['nombre']) || empty($_POST['apellidos']) || empty($_POST['dia']) || empty($_POST['Hora']) || empty($_POST['phone']) || empty($_POST['procedencia']) || empty($_POST['asunto'])) {
      // si alguno de los campos requeridos está vacío, se redirige al frontend con un mensaje de error
      header('Location: ../../frontend/?mensaje=Datos incompletos&clase=alert-warning');
    } else {
      $id = $_REQUEST['id'];
      $nombre = $_POST['nombre'];
      $apellidos = $_POST['apellidos'];
      $dia = $_POST['dia'];
      $hora = $_POST['Hora'];
      $phone = $_POST['phone'];
      $procedencia = $_POST['procedencia'];
      $asunto = $_POST['asunto'];
      // se prepara una sentencia SQL para actualizar un usuario existente
      $sentencia = $pdo->prepare('UPDATE usuarios SET nombre=?, apellidos=?, dia=?, Hora=?, phone=?, procedencia=?, asunto=? WHERE id=?');
      // se pasan los valores de los campos del formulario como parámetros en el orden correcto
      $sentencia->bindParam(1, $nombre);
      $sentencia->bindParam(2, $apellidos);
      $sentencia->bindParam(3, $dia);
      $sentencia->bindParam(4, $hora);
      $sentencia->bindParam(5, $phone);
      $sentencia->bindParam(6, $procedencia);
      $sentencia->bindParam(7, $asunto);
      $sentencia->bindParam(8, $id);
      // se ejecuta la sentencia SQL
      if ($sentencia->execute()) {
        // si la actualización ha sido exitosa, se redirige al frontend con un mensaje de éxito
        header('Location: ../../frontend/?mensaje=Actualización exitosa&clase=alert-success');
      } else {
        // si ha habido un error en la actualización, se redirige al frontend con un mensaje de error
        header('Location: ../../frontend/?mensaje=Error al actualizar usuario&clase=alert-danger');
      }
    }
  }
  break;

case 'DELETE':
  // se verifica si se ha proporcionado un id y si está vacío
  if (!isset($_REQUEST['id']) || empty($_REQUEST['id'])) {
    // si no se ha proporcionado un id, se redirige al frontend con un mensaje de error
    header('Location: ../../frontend/?mensaje=Error al eliminar usuario: no se ha proporcionado un id&Error al eliminar usuario: no se ha proporcionado un id&clase=alert-danger');
  } else {
    $id = $_REQUEST['id'];
    // se prepara una sentencia SQL para eliminar un usuario existente
    $sentencia = $pdo->prepare('DELETE FROM usuarios WHERE id=?');
    // se pasa el valor del id como parámetro en la sentencia SQL
    $sentencia->bindParam(1, $id);
    // se ejecuta la sentencia SQL
    if ($sentencia->execute()) {
    // si la eliminación ha sido exitosa, se redirige al frontend con un mensaje de éxito
    header('Location: ../../frontend/?mensaje=Eliminación exitosa&clase=alert-success');
    } else {
    // si ha habido un error en la eliminación, se redirige al frontend con un mensaje de error
    header('Location: ../../frontend/?mensaje=Error al eliminar usuario&clase=alert-danger');
    }
    }
    break;

default:
// si se ha proporcionado un método HTTP no válido, se redirige al frontend con un mensaje de error
header('Location: ../../frontend/?mensaje=Método HTTP no válido&clase=alert-danger');
break;
}

// se cierra la conexión a la base de datos
print json_encode($data, JSON_UNESCAPED_UNICODE);
$pdo = null;
?>