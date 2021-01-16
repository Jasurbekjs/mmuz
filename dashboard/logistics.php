<?php
	header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: POST');
//inputs
  	$email=$_POST['email'];
//inputs
  	//operations
	include "../auth/config.php";
	$Logistics_table=mysqli_query($connection,"SELECT * FROM `logistics` WHERE `status`!='Завершено'");
	$Logistics=array();
	while($logistic = mysqli_fetch_assoc($Logistics_table)) 
	{
		$Logistics[]=$logistic;
	}
	$response=array();
    for($i=0; $i<count($Logistics);$i++)
    {
      $response[$i]=array(
          'id'=>$Logistics[$i]['id'],
          'type_transportation'=>$Logistics[$i]['type_transportation'],
          'load_transportation'=>$Logistics[$i]['load_transportation'],
          'from_country'=>$Logistics[$i]['from_country'],
          'to_country'=>$Logistics[$i]['to_country'],
          'from_city'=>$Logistics[$i]['from_city'],
          'to_city'=>$Logistics[$i]['to_city'],
          'status'=>$Logistics[$i]['status'],
          'created_date'=>$Logistics[$i]['created_date'],
          'comments'=>$Logistics[$i]['comments']
        );
    }
	//operations

	//response
	die( json_encode(array(
          'logistic'=>$response
        )));  
	//response
?>