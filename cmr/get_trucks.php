<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

	$request=$_GET['id'];
  	
	if(!empty($request))
	{
		require_once "../auth/config.php";

		$Transports_table=mysqli_query($connection,"SELECT * FROM `shipping` WHERE `logistics_id`='$request'");
        $Transports=array();
        $Transport_ids=array();
        $Drivers_ids=array();
        $Carrier_ids=array();
        while($transport=mysqli_fetch_assoc($Transports_table))
        {
        	$Transports[]=$transport;
        	$Transport_ids[]=$transport['transport_id'];
        	$Drivers_ids[]=$transport['driver_id'];
        	$Carrier_ids[]=$transport['carrier_id'];
        }
        $Tractor=array();
        $Trailer=array();
        $Country=array();
        $Mark=array();
        $truc_id=array();
        for($i=0;$i<count($Transports);$i++)
        {
        	$Truck_table=mysqli_query($connection,"SELECT * FROM `transport` WHERE `id`='$Transport_ids[$i]'");
        	$Truck=mysqli_fetch_assoc($Truck_table);
        	
        	$Tractor[$i]=$Truck['tractor'];
        	$Trailer[$i]=$Truck['trailer'];
        	$Country[$i]=$Truck['country'];
        	$Mark[$i]=$Truck['mark'];
        	$trac_id[$i]=$Truck['id'];
        }

        $driver_first_name=array();
        $driver_last_name=array();
        for($i=0;$i<count($Transports);$i++)
        {
        	$Driver_table=mysqli_query($connection,"SELECT * FROM `drivers` WHERE `id`='$Drivers_ids[$i]'");
        	$Driver=mysqli_fetch_assoc($Driver_table);
        	$driver_first_name[$i]=$Driver['driver_first_name'];
        	$driver_last_name[$i]=$Driver['driver_last_name'];
        }

      	$name_company=array();
      	for($i=0;$i<count($Transports);$i++)
        {
        	$Carrier_table=mysqli_query($connection,"SELECT * FROM `carriers` WHERE `id`='$Carrier_ids[$i]'");
        	$Carrier=mysqli_fetch_assoc($Carrier_table);
        	
        	$name_company[$i]=$Carrier['name_company'];
        }

        $CMRs_table=mysqli_query($connection,"SELECT * FROM `cmr` WHERE `logistics_id`='$request'");
        $CMRs=array();
        $cmr_number=array();
        $cmr_date=array();
        $path=array();
        while($cmr=mysqli_fetch_assoc($CMRs_table))
        {
        	$CMRs[]=$cmr;
        }
        for($i=0;$i<count($CMRs);$i++)
        {
        	$cmr_number[$i]=$CMRs[$i]['cmr_number'];
        	$cmr_date[$i]=$CMRs[$i]['cmr_date'];
        	$path[$i]=$CMRs[$i]['path'];
        }

		die( json_encode(array(
            'tractor'=>$Tractor,
            'trailer'=>$Trailer,
            'country'=>$Country,
            'mark'=>$Mark,
            'trac_id'=>$trac_id,
            'driver_first_name'=>$driver_first_name,
			'driver_last_name'=>$driver_last_name,
			'name_company'=>$name_company,
            'cmr_number'=>$cmr_number,
            'cmr_date'=>$cmr_date,
            'path'=>$path
    	)));
	}

?>