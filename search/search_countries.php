<?php		

	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

	$request = strval($_GET['countries']);
	if(!empty($request))
	{
		require_once "../auth/config.php";
		$Countries_table=mysqli_query($connection,"SELECT `country_name` FROM `countries` WHERE `country_name` LIKE '%{$request}%'");
		$Countries=array();
		$i=0;
		while($i<20 && ($country=mysqli_fetch_assoc($Countries_table)))
		{
			$Countries[]=$country['country_name'];
			$i++;
		}
		die( json_encode(array(
        'countries'=>$Countries
      )));
	}
	else
	{
		$Countries=["Введите значения для поиска"];
		die( json_encode(array(
        'countries'=>$Countries
      )));
	}
?>