<?php
	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

  	$Logistic_id=$_POST['id'];
  	$Transport_id=$_POST['transport_id'];
  	$Status=$_POST['status'];
  	$Date=$_POST['date'];

  	if(!empty($Logistic_id))
  	{
  		require_once "../auth/config.php";
  		$Insert_Status=mysqli_query($connection,"INSERT INTO `truck_status`(`id`, `logistics_id`, `truck_id`, `status`, `status_date`) VALUES (NULL,'$Logistic_id','$Transport_id','$Status','$Date')");






  		die( json_encode(array(
				'response'=>$Status,
				'Insert_Status'=>$Insert_Status
			)));
  	}