<?php		

	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

	$request = strval($_GET['company']);
	if(!empty($request))
	{
		require_once "../auth/config.php";
		$Companies_data_table=mysqli_query($connection,"SELECT `name_company` FROM `companies` WHERE `name_company` LIKE '%{$request}%'");
		$Company_data=array();
		$i=0;
		while($i<20 && ($company=mysqli_fetch_assoc($Companies_data_table)))
		{
			$Company_data[]=$company['name_company'];
			$i++;
		}
		die( json_encode(array(
        'company'=>$Company_data
      )));
	}
	else
	{
		$Company_data=["Введите значения для поиска"];
		die( json_encode(array(
        'company'=>$Company_data
      )));
	}
?>