<?php		

	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

	$request = strval($_GET['tractor']);
	if(!empty($request))
	{
		require_once "../auth/config.php";
		$Tractors_data_table=mysqli_query($connection,"SELECT `tractor` FROM `transport` WHERE `tractor` LIKE '%{$request}%'");
		$Tractors_data=array();
		$i=0;
		while($i<20 && ($tractor=mysqli_fetch_assoc($Tractors_data_table)))
		{
			$Tractors_data[]=$tractor['tractor'];
			$i++;
		}
		die( json_encode(array(
        'tractor'=>$Tractors_data
      )));
	}
	else
	{
		$Tractors_data=["Введите значения для поиска"];
		die( json_encode(array(
        'tractor'=>$Tractors_data
      )));
	}
?>