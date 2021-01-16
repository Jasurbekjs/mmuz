<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

  	$logistic_id=$_POST['id'];
  	$transport_id=$_POST['transport_id'];
  	
	if(!empty($logistic_id))
	{
		require_once "../auth/config.php";
		/////////////////////////////////////////Carrier_id
		
		if(!empty($transport_id))
		{
			$Delete_Shipping=mysqli_query($connection,"DELETE FROM `shipping` WHERE `id`='$transport_id'");
		}
	}
	die( json_encode(array(
                'logistic_id'=>$logistic_id,
                'transport_id'=>$transport_id,
                'Delete_Shipping'=>$Delete_Shipping
    		)));

 ?>