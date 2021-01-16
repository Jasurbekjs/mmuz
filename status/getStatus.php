<?php
	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
  header('Access-Control-Allow-Methods: POST');

  	$Logistic_id=$_POST['id'];
  	$Transport_id=$_POST['transport_id'];

  	if(!empty($Logistic_id))
  	{
  		require_once "../auth/config.php";
  		$Select_Status=mysqli_query($connection,"SELECT * FROM `truck_status` WHERE `logistics_id`='$Logistic_id' AND `truck_id`='$Transport_id'");
      $Status=array();
      while($stat=mysqli_fetch_assoc($Select_Status))
      {
        $Status[]=$stat;
      }

  		die( json_encode(array(
				'response'=>$Status,
				'Select_Status'=>$Select_Status
			)));
  	}