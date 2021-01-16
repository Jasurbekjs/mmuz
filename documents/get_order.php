<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$request=$_GET['id'];
  	
	if(!empty($request))
	{
		require_once "../auth/config.php";
		
		









		
		die( json_encode(array(
                'response'=>$response
    		)));

	}

 ?>