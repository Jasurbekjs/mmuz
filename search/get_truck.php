<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: GET');

  $request = $_GET['tractor'];
  if(!empty($request))
  {
    require_once "../auth/config.php";
    
    $Tractor_data_table=mysqli_query($connection,"SELECT * FROM `transport` WHERE `tractor`='$request'");
    $Tractor_data=mysqli_fetch_assoc($Tractor_data_table);
    die(json_encode(array(
        'trailer'=>$Tractor_data['trailer'],
        'country'=>$Tractor_data['country'],
        'mark'=>$Tractor_data['mark']
      )));
  }

  else
  {
    $Tractor_data=["Нет данных..."];
    die( json_encode(array(
        'truck'=>$Tractor_data
      )));
  }
?>