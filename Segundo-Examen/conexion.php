<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

$conexion = new mysqli("localhost", "root", "", "api1");
if ($conexion->connect_error) die(json_encode(["error" => "Error de conexión"]));

$metodo = $_SERVER['REQUEST_METHOD'];

switch($metodo) {
    case 'GET':
        $tabla = isset($_GET['tabla']) ? $_GET['tabla'] : 'peliculas';
        $sql = "SELECT * FROM $tabla";
        $resultado = $conexion->query($sql);
        echo json_encode($resultado->fetch_all(MYSQLI_ASSOC));
        break;

    case 'POST':
        $datos = json_decode(file_get_contents("php://input"));
        if (isset($datos->titulo)) { // Es una película
            $sql = "INSERT INTO peliculas (id, titulo, genero, anio) VALUES ('$datos->id', '$datos->titulo', '$datos->genero', '$datos->anio')";
        } else if (isset($datos->nombre)) { // Es un cliente
            $sql = "INSERT INTO clientes (id, nombre, correo) VALUES ('$datos->id', '$datos->nombre', '$datos->correo')";
        }
        
        if($conexion->query($sql)) echo json_encode(["status" => "ok"]);
        else echo json_encode(["error" => $conexion->error]);
        break;
}
$conexion->close();
?>