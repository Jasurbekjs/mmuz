<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: GET');

  $request = $_GET['driver'];
  if(!empty($request))
  {
    require_once "../auth/config.php";
    
    $Driver_data_table=mysqli_query($connection,"SELECT * FROM `drivers` WHERE `driver_number_pass`='$request'");
    $Driver_data=mysqli_fetch_assoc($Driver_data_table);
    die(json_encode(array(
        'driver_seria_pass'=>$Driver_data['driver_seria_pass'],
        'driver_first_name'=>$Driver_data['driver_first_name'],
        'driver_last_name'=>$Driver_data['driver_last_name'],
        'driver_country'=>$Driver_data['driver_country'],
        'driver_text'=>$Driver_data['driver_text']
      )));
  }

  else
  {
    $Driver_data=["Нет данных..."];
    die( json_encode(array(
        'driver'=>$Driver_data
      )));
  }
?>