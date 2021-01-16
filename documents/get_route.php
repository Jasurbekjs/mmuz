<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$request=$_GET['id'];
  	
	if(!empty($request))
	{
		require_once "../auth/config.php";
		
		$Route_table=mysqli_query($connection,"SELECT `from_country`, `to_country`, `from_city`, `to_city` FROM `logistics` WHERE `id`='$request'");
    	$Route=mysqli_fetch_assoc($Route_table);
        die( json_encode(array(
                'route'=>$Route
    		)));
	}

 ?>