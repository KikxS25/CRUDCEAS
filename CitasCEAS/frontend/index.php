<?php 
// Incluye un archivo PHP en este script
require_once './components/index-apertura.php';
// URL del archivo PHP que maneja el modelo de datos
$url = "http://localhost/projects/crud-pokemon-inc/backend/models/usuarios.php";
//Parámetros GET a enviar
$parameters = "?httpMethods=GET";
// Concatena la URL con los parámetros
$endpoint = $url . $parameters;
// Inicializa una sesión CURL
$ch = curl_init();
// Configura una opción para una transferencia CURL
curl_setopt($ch, CURLOPT_URL, $endpoint);
// Configura una opción para una transferencia CURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Ejecuta la sesión CURL y guarda la respuesta
$response = curl_exec($ch);
// Si hay un error en la sesión CURL
if (curl_errno($ch)) {
  // Imprime el error de la sesión
  echo (curl_error($ch));
}
// Cierra la sesión CURL
curl_close($ch);
// Decodifica la respuesta JSON en un objeto PHP
$usuarios = json_decode($response);

?>

<main class="container">
  <div class="row justify-content-center">
  <?php
   // Si la variable 'mensaje' ha sido definida en la URL
if (isset($_GET['mensaje'])) {
  // Si la variable 'mensaje' está vacía
  if (empty($_GET['mensaje'])) {
  // Si la variable 'mensaje' no se muestra nada
  } else {
  // Se muestra una alerta con el mensaje y la clase correspondiente  
?>
    <div class="alert <?= $_GET['clase']; ?> alert-dismissible fade show" role="alert">
      <strong><?= $_GET['mensaje']; ?></strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
<?php
  }
}
?>
  <header class="bg-danger text-light text-center py-3">
    <h1>Registro de los turnos de usuarios</h1>
  </header> 
    <main class="container">
        <div class="row justify-content-center">
          <?php
          if (isset($_GET['mensaje'])) {
            if (empty($_GET['mensaje'])) {
            } else {
          ?>
              <div class="alert <?= $_GET['clase']; ?> alert-dismissible fade show" role="alert">
                <strong><?= $_GET['mensaje']; ?></strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          <?php
            }
          }
          ?>
      
<div class="row justify-content-center">
  <!-- Formulario para crear un usuario -->  
  <div class="col-md-4 my-2">
    <div class="card">
      <div class="bg-danger text-center text-light card-header">
          Crear usuario
            </div>
            <!-- Icono de usuario -->
          <div class="card-body">
            <!-- Etiqueta y campo de nombre -->
            <i class="fas fa-user"></i>
            <label for="nombre">Nombre</label>
          <form method="POST" action="../backend/models/usuarios.php">
          <!-- Etiqueta y campo de apellidos -->
          <div class="mb-3">
          <input type="text" name="nombre" class="form-control" id="nombre" aria-describedby="nombre" placeholder="Nombre(s)" required autofocus/>
        </div>
        <div class="mb-3">
          <i class="fa-solid fa-users"></i>
          <label for="apellido">Apellidos</label>
          <input type="text" name="apellido" class="form-control" id="apellido" aria-describedby="apellido" placeholder="Apellido(s)" required autofocus/>
        </div>
        <!-- Etiqueta y campo de día de audiencia -->
        <div class="mb-3">
          <i class="fa-solid fa-calendar"></i>
          <label for="apellido">Día de audiencia</label>
          <input type="date" name="dia_audiencia" class="fo.rm-control" id="dia_audiencia" placeholder="Día de Audiencia" required autofocus/>
        </div>
        <div class="mb-3">
        <i class="fa-solid fa-clock"></i>
          <!-- Etiqueta y campo de hora de cita -->
          <label for="HoraDeCita">Hora de Cita</label>
          <input type="time" name="hora_cita" class="form-control" id="hora_cita" placeholder="Hora de Cita" required autofocus/>
        </div>
        <div class="mb-3">
          <!-- Etiqueta y campo de teléfono -->
          <i class="fa-solid fa-mobile-screen"></i>
          <label for="phone">Teléfono</label>
          <input type="text" name="phone" class="form-control" id="phone" placeholder="Teléfono" required autofocus />
        </div>
        <div class="mb-3">
          <!-- Etiqueta y campo de número de personas -->
          <i class="fa-solid fa-users-viewfinder"></i>
          <label for="num_persons">Numero de Personas</label>
          <input type="number" name="num_persons" class="form-control" id="personas" placeholder="Personas" required autofocus/>
        </div>
        <!-- Etiqueta y campo de procedencia -->
        <i class="fas fa-map-marker-alt"></i>
        <label for="procedencia"> Procedencia</label>
        <input type="text" name="procedencia" class="form-control" id="asunto" placeholder="Municipio" required autofocus>
        <br>
        <div class="mb-3">
          <!-- Etiqueta y campo de asunto-->
          <i class="fa-regular fa-message"></i>
          <label for="Subject">Asunto</label>
          <input type="text" name="asunto" class="form-control" id="asunto" placeholder="Asunto" required autofocus/>
        </div>
        <div>
        </div>
          <!-- Botón para crear usuario-->
        <button type="submit" class="btn btn-danger"><i class="fa-solid fa-user-plus"></i> Crear usuario</button>
      </form>
              </form>
            </div>
          </div>
        </div>
      </div>
      // Abrimos el contenedor de la página
      <div class="container-fluid">
      // Abrimos un contenedor de fila para centrar el contenido
        <div class="row justify-content-center">
        // Abrimos un contenedor de columna para definir el ancho y los margenes  
        <div class="col-lg-8 my-2">
            <div class="card">
            // Crea una cabecera con información relevante
              <div class="bg-danger card-header text-light">
                <p>Turnado al:</p>
                <i class="fa-solid fa-user-tie"></i>
                <span><b>Ing. Gildardo García Rodríguez</b></span>
              </div>
              <div class="card">
              // Crea una cabecera con la dirección de la DOMCCA
                <div class="bg-danger card-header text-light">
                  <p class>Dirección de la DOMCCA</p>
                  <i class="fas fa-map-marker-alt"></i>
                  <B>Boulevard Adolfo Ruiz Cortines 1205, Adolfo Lopez Mateos, 86040 Villahermosa, Tabasco, México.</B>
                </div>
              </div>
              // Crea un cuerpo de tarjeta con un fondo de advertencia
              <div class="bg-warning card-body">
                <div class="table-responsive">
                  <table class="table table-dark table-striped table-hover mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre(s)</th>
                        <th scope="col">Apellido(s)</th>
                        <th scope="col">Día De Audiencia</th>
                        <th scope="col">Hora de Cita</th>
                        <th scope="col">Télefono</th>
                        <th scope="col">Personas</th>
                        <th scope="col">Procedencia</th>
                        <th scope="col">Asunto</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                    // Iniciamos un bucle foreach para iterar a través de la lista de usuarios y mostrar sus datos
                      <?php foreach ($usuarios as $elemento): ?>
                        // Creamos una fila y mostramos los datos del usuario actual
                        <tr>
                          <!-- Columna de ID -->
                          <td><?php echo $elemento->id; ?></td>
                          <!-- Columna de Nombre -->
                          <td><?php echo $elemento->Nombre; ?></td>
                          <!-- Columna de Apellidos -->
                          <td><?php echo $elemento->Apellidos; ?></td>
                          <!-- Columna de Día de Audiencia -->
                          <td><?php echo $elemento->DíaDeAudiencia; ?></td>
                          <!-- Columna de Hora de Cita -->
                          <td><?php echo $elemento->HoraDeCita; ?></td>
                          <!-- Columna de Teléfono -->
                          <td><?php echo $elemento->Telefono; ?></td>
                          <!-- Columna de Personas -->
                          <td><?php echo $elemento->Personas; ?></td>
                          <!-- Columna de Procedencia -->
                          <td><?php echo $elemento->Procedencia; ?></td>
                          <!-- Columna de Asunto -->
                          <td><?php echo $elemento->Asunto; ?></td>
                          <!-- Columna de Acciones -->
                          <td>
                            <!-- Botón de Editar -->
                            <a href="./views/editar.php?id=<?php echo $elemento->id; ?>" class="text-decoration-none">✏</a>
                            <!-- Botón de Eliminar -->
                            <a href="../backend/models/usuarios.php?httpMethods=DELETE&id=<?php echo $elemento->id; ?>" class="text-decoration-none">🗑</a>
                          </td>
                        </tr>
                      <?php endforeach; ?>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</main>