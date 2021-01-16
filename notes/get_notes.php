<?php
	  header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');
	//inputs
  	$id=$_GET['id'];
	//inputs
	//operations
  	include "../auth/config.php";

  	$Notes_table=mysqli_query($connection,"SELECT * FROM `notes` WHERE `logistics_id`='$id'");
    $Notes=array();
    while($note=mysqli_fetch_assoc($Notes_table))
    {
      $Notes[]=$note;
    }
    $response=array();
  	for($i=0; $i<count($Notes);$i++)
    {
      $response[$i]=array(
          'notes'=>nl2br($Notes[$i]['notes']),
          'operator'=>$Notes[$i]['operator'],
          'created_date'=>$Notes[$i]['created_date']
        );
    }
  	die( json_encode(array(
          'response'=>$response
        ))); 
?>