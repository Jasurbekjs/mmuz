<?php		

	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

	$request = strval($_GET['driver']);
	if(!empty($request))
	{
		require_once "../auth/config.php";
		$Drivers_data_table=mysqli_query($connection,"SELECT `driver_number_pass` FROM `drivers` WHERE `driver_number_pass` LIKE '%{$request}%'");
		$Drivers_data=array();
		$i=0;
		while($i<20 && ($driver=mysqli_fetch_assoc($Drivers_data_table)))
		{
			$Drivers_data[]=$driver['driver_number_pass'];
			$i++;
		}
		die( json_encode(array(
        'driver'=>$Drivers_data
      )));
	}
	else
	{
		$Drivers_data=["Введите значения для поиска"];
		die( json_encode(array(
        'driver'=>$Drivers_data
      )));
	}
?>