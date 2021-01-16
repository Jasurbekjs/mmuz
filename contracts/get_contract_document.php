<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$id=$_GET['id'];

  	if(!empty($id))
  	{
  		require_once "../auth/config.php";

  		$Contracts_table=mysqli_query($connection,"SELECT * FROM `contracts` WHERE `id`='$id'");
		  $Contracts = mysqli_fetch_assoc($Contracts_table);
      $response=array(
        'contract_number'=>$Contracts['contract_number'],
        'contract_date'=>$Contracts['contract_date'],
        'contract_currency'=>$Contracts['contract_currency'],
        'contract_amount'=>$Contracts['contract_amount'],
        'contract_comment'=>$Contracts['contract_comment'],
        'contract_path'=>$Contracts['contract_path'],
      );
      //response
		  die( json_encode(array(
        $response
      )));  
		  //response
  	}

 ?>