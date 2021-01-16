<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$logistics_id=$_GET['id'];

  	if(!empty($logistics_id))
  	{
  		require_once "../auth/config.php";

  		$Payments_table=mysqli_query($connection,"SELECT * FROM `payment` WHERE `logistics_id`='$logistics_id' AND `invoice_type`='1'");
      $Payments=array();
      while($payment=mysqli_fetch_assoc($Payments_table))
      {
        $Payments[]=$payment;
      }

  		die( json_encode(array(
        	'response'=>$Payments
    	)));	
  	}




  	 
?>