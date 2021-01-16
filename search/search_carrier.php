<?php		

	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

	$request = strval($_GET['carrier']);
	if(!empty($request))
	{
		require_once "../auth/config.php";
		$Carriers_table=mysqli_query($connection,"SELECT `name_company` FROM `carriers` WHERE `name_company` LIKE '%{$request}%'");
		$Carriers=array();
		$i=0;
		while($i<20 && ($carrier=mysqli_fetch_assoc($Carriers_table)))
		{
			$Carriers[]=$carrier['name_company'];
			$i++;
		}
		die( json_encode(array(
        'carrier'=>$Carriers
      )));
	}
	else
	{
		$Carriers=["Введите значения для поиска"];
		die( json_encode(array(
        'carrier'=>$Carriers
      )));
	}
?>