<?php
	  header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

    $logistics_id=$_POST['logistics_id'];
    $del_id=$_POST['del_id'];
  	if(!empty($logistics_id))
  	{
  		require_once "../auth/config.php";

  		$Delete_Payment=mysqli_query($connection,"DELETE FROM `payment` WHERE `id`='$del_id'");

  		die( json_encode(array(
        	'response'=>$Delete_Payment
    	)));	
  	}




  	 
?>