<?php
	header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: POST');

  $Logistic_id=$_POST['logistic_id'];
  $Auto=$_POST['Auto'];
	$service=$_POST['service'];
	$incoterm=$_POST['incoterm'];
	$country_begin=$_POST['country_begin'];
	$country_end=$_POST['country_end'];
	$city_begin=$_POST['city_begin'];
	$city_end=$_POST['city_end'];
	$status=$_POST['status'];
	$comments=$_POST['comments'];
	$rate_for_client=$_POST['rate_for_client'];
	$rate_for_client_currency=$_POST['rate_for_client_currency'];
	$name_company=$_POST['name_company'];
	$operator=$_POST['operator'];
	$today = date("Y-m-d");  
	//Inputs

	//Operations
	if(!empty($Logistic_id))
  	{
    	require_once "../auth/config.php";
    	//Переменные для проверки записи в базу
    	$LOGISTICS_state=false;
    	//Переменные для проверки записи в базу
    	

    	/////////////////////////////////  проверка companies

  		$Search_COMPANY_table=mysqli_query($connection,"SELECT `name_company`,`id` FROM `companies` WHERE `name_company`='$name_company'");
  		$Search_COMPANY = mysqli_fetch_assoc($Search_COMPANY_table);
  		if($Search_COMPANY!=NULL)
  		{
  		  $ID_COMPANY=$Search_COMPANY['id'];
  		}
      /////////////////////////////////  проверка companies

    	$Update_logistics=mysqli_query($connection,"UPDATE `logistics` SET
    		`type_transportation`='$Auto',
    		`load_transportation`='$service',
    		`incoterm`='$incoterm',
    		`from_country`='$country_begin',
    		`to_country`='$country_end',
    		`from_city`='$city_begin',
    		`to_city`='$city_end',
    		`status`='$status',
    		`comments`='$comments',
    		`rate_for_client`='$rate_for_client',
    		`rate_for_client_currency`='$rate_for_client_currency',
    		`company_id`='$ID_COMPANY'
    		WHERE `id`='$Logistic_id'");
    	if($Update_logistics)
    	{
    		$LOGISTICS_state=true;
    	}
		//Response
		if($LOGISTICS_state)
		{
			die( json_encode(array(
				'response'=>'Succesfully!',
			)));
		}
	}
?>