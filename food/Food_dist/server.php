// <?php
// //$_POST = json_decode( file_get_contents("php://input"), true ); // используется при передаче данных в формате JSON
// echo var_dump($_POST);
<?php
$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST);
