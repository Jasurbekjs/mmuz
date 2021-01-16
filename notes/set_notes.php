<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');
	//inputs
  	$id=$_POST['id'];
  	$email=$_POST['email'];
  	$note=$_POST['note'];
  	$date=$_POST['date'];
	//inputs
	//operations
  	include "../auth/config.php";

  	$Set_Notes=mysqli_query($connection,"INSERT INTO `notes`(`id`, `logistics_id`, `notes`, `operator`, `created_date`) VALUES (NULL,'$id','$note','$email','$date')");

  	if($Set_Notes)
  	{
		$response="Данные успешно сохранены";
  	}
  	else
  	{
  		$response="Fail response...";
  	}
  	die( json_encode(array(
          'response'=>$response
        ))); 
?>