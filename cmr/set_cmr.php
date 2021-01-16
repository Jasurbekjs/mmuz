<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

  	$id=$_POST['id'];
  	$truck_id=$_POST['truck_id'];
  	$cmr_number=$_POST['cmr_number'];
  	$cmr_date=$_POST['cmr_date'];

  	if(!empty($id) && !empty($truck_id))
  	{
  		require_once "../auth/config.php";
  		
  		$CMRs_table=mysqli_query($connection,"SELECT * FROM `cmr` WHERE `logistics_id`='$id' AND `transport_id`='$truck_id'");
        $CMRs=mysqli_fetch_assoc($CMRs_table);

        if($CMRs==NULL)
        {
  			$Insert_cmr=mysqli_query($connection,"INSERT INTO `cmr`(`id`, `logistics_id`, `transport_id`, `cmr_number`, `cmr_date`, `path`) VALUES (NULL,'$id','$truck_id','$cmr_number','$cmr_date','')");
        }
        else
        {
        	$Update_cmr=mysqli_query($connection,"UPDATE `cmr` SET 
        		`logistics_id`='$id',
        		`transport_id`='$truck_id',
        		`cmr_number`='$cmr_number',
        		`cmr_date`='$cmr_date' WHERE `logistics_id`='$id' AND `transport_id`='$truck_id'");
        }

  		die( json_encode(array(
            'Insert_cmr'=>$Insert_cmr,
            'Update_cmr'=>$Update_cmr
    	)));
  	}

?>