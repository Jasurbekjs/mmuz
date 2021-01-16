<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

  	$logistic_id=$_POST['id'];
  	$searchTractor=$_POST['searchTractor'];
	$trailer=$_POST['trailer'];
	$searchCountry_truck=$_POST['searchCountry_truck'];
	$mark_truck=$_POST['mark_truck'];
	$driver_seria_pass=$_POST['driver_seria_pass'];
	$searchDriver_number_pass=$_POST['searchDriver_number_pass'];
	$driver_first_name=$_POST['driver_first_name'];
	$driver_last_name=$_POST['driver_last_name'];
	$searchDriver_country=$_POST['searchDriver_country'];
	$driver_text=$_POST['driver_text'];
	$searchCarrier_name=$_POST['searchCarrier_name'];
	$rate=$_POST['rate'];
	$rate_currency=$_POST['rate_currency'];
	if(!empty($logistic_id))
	{
		require_once "../auth/config.php";
		/////////////////////////////////////////Carrier_id
		$Search_Carrier_table = mysqli_query($connection,"SELECT `id`,`name_company` FROM `carriers` WHERE `name_company`='$searchCarrier_name'");
		$Search_Carrier = mysqli_fetch_assoc($Search_Carrier_table);
		if($Search_Carrier==NULL)
		{
			die( json_encode(array(
				'status'=>'Error!',
				'text'=>'Carrier not Saved!',
			)));
		}
		else
		{
			$CARRIER_ID=$Search_Carrier['id'];
		}
		/////////////////////////////////////////Carrier_id
		/////////////////////////////////////////Driver_id
		$Search_Driver_table = mysqli_query($connection,"SELECT `id`,`driver_number_pass` FROM `drivers` WHERE `driver_number_pass`='$searchDriver_number_pass'");
		$Search_Driver = mysqli_fetch_assoc($Search_Driver_table);
		if($Search_Driver==NULL)
		{
			$Insert_Driver=mysqli_query($connection,
				"INSERT INTO `drivers`(`id`, `driver_seria_pass`, `driver_number_pass`, `driver_first_name`, `driver_last_name`, `driver_country`, `driver_text`) 
				VALUES (NULL,'$driver_seria_pass','$searchDriver_number_pass','$driver_first_name','$driver_last_name','$searchDriver_country','$driver_text')");
			$Search_Driver_table_insert = mysqli_query($connection,"SELECT `id`,`driver_number_pass` FROM `drivers` WHERE `driver_number_pass`='$searchDriver_number_pass'");
			$Search_Driver_insert = mysqli_fetch_assoc($Search_Driver_table_insert);
			$DRIVER_ID=$Search_Driver_insert['id'];
		}
		else
		{
			$DRIVER_ID=$Search_Driver['id'];
			$Update_Driver=mysqli_query($connection,
				"UPDATE `drivers` SET 	`driver_seria_pass`='$driver_seria_pass',
										`driver_number_pass`='$searchDriver_number_pass',
										`driver_first_name`='$driver_first_name',
										`driver_last_name`='$driver_last_name',
										`driver_country`='$searchDriver_country',
										`driver_text`='$driver_text'
										WHERE `id`='$DRIVER_ID'");
		}
		/////////////////////////////////////////Driver_id
		/////////////////////////////////////////Transport_id
		$Search_Transport_table = mysqli_query($connection,"SELECT `id`,`tractor` FROM `transport` WHERE `tractor`='$searchTractor'");
		$Search_Transport = mysqli_fetch_assoc($Search_Transport_table);
		if($Search_Transport==NULL)
		{
			$Insert_Transport=mysqli_query($connection,
				"INSERT INTO `transport`(`id`, `tractor`, `trailer`, `country`, `mark`) 
				VALUES (NULL,'$searchTractor','$trailer','$searchCountry_truck','$mark_truck')");
			$Search_Transport_table_insert = mysqli_query($connection,"SELECT `id`,`tractor` FROM `transport` WHERE `tractor`='$searchTractor'");
			$Search_Transport_insert = mysqli_fetch_assoc($Search_Transport_table_insert);
			$TRANSPORT_ID=$Search_Transport_insert['id'];
		}
		else
		{
			$TRANSPORT_ID=$Search_Transport['id'];
			$Update_Driver=mysqli_query($connection,
				"UPDATE `transport` SET `tractor`='$searchTractor',
										`trailer`='$trailer',
										`country`='$searchCountry_truck',
										`mark`='$mark_truck' 
										WHERE `id`='$TRANSPORT_ID'");
		}
		/////////////////////////////////////////Transport_id
		if(!empty($CARRIER_ID) && !empty($DRIVER_ID) && !empty($TRANSPORT_ID))
		{
			$num_logistic_id=(int)$logistic_id;
			$num_CARRIER_ID=(int)$CARRIER_ID;
			$num_DRIVER_ID=(int)$DRIVER_ID;
			$num_TRANSPORT_ID=(int)$TRANSPORT_ID;
			$double_rate=(double)$rate;
			$string_rate_currency=(string)$rate_currency;
			$Insert_shipping=mysqli_query($connection,
				"INSERT INTO `shipping`(`id`, `logistics_id`, `carrier_id`, `driver_id`, `transport_id`, `rate`, `rate_currency`)
				VALUES (NULL,'$num_logistic_id','$num_CARRIER_ID','$num_DRIVER_ID','$num_TRANSPORT_ID','$double_rate','$string_rate_currency')");	
			
		}
	}


 ?>