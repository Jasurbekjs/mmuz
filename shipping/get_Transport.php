<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: GET');

 	$request = $_GET['id'];
 	if(!empty($request))
 	{
    	require_once "../auth/config.php";

    	$Transport_data_table=mysqli_query($connection,"SELECT * FROM `shipping` WHERE `logistics_id`='$request'");
    	$Transport_data=array();
    	while($transport=mysqli_fetch_assoc($Transport_data_table))
    	{
    		$Transport_data[]=$transport;
    	}
    	$Carriers=array();
    	$Transports_data=array();
    	$Drivers_data=array();
    	$rates=array();
    	$rates_currency=array();
        $Total_rate=0;
        $Total_currency=$Transport_data[0]['rate_currency'];
        $carriers_ids=array();
        $carriers_ids[0]=$Transport_data[0]['carrier_id'];
        $state=false;
    	for( $i=0; $i<count($Transport_data); $i++)
    	{
            if($Transport_data[0]['carrier_id']!=$Transport_data[$i+1]['carrier_id'] && $Transport_data[$i+1]['carrier_id']!="")
            {
                //echo $Transport_data[0]['carrier_id'].'-!=-'.$Transport_data[$i+1]['carrier_id'].'<br/>';
                for($j=0; $j<count($carriers_ids);$j++)
                {
                    if($carriers_ids[$j]!=$Transport_data[$i+1]['carrier_id'])
                    {
                        //echo $carriers_ids[$j].'-!=-'.$Transport_data[$i+1]['carrier_id'].'<br/>';
                        $state=true;
                    }
                    else
                    {
                        $state=false;
                        break;
                    }
                }
                if($state==true)
                {
                    //echo $Transport_data[$i+1]['carrier_id'];
                    $carriers_ids[]=$Transport_data[$i+1]['carrier_id'];
                    $state=false;
                }
                
            }
    		$Carrier_id=$Transport_data[$i]['carrier_id'];
    		$Carrier_table=mysqli_query($connection,"SELECT `name_company` FROM `carriers` WHERE `id`='$Carrier_id'");
    		$Carrier=mysqli_fetch_assoc($Carrier_table);
    		$Carriers[]=$Carrier['name_company'];
    		$Transport_id=$Transport_data[$i]['transport_id'];
    		$Transport_data_tables=mysqli_query($connection,"SELECT * FROM `transport` WHERE `id`='$Transport_id'");
    		$Transport_datas=mysqli_fetch_assoc($Transport_data_tables);
    		$Transports_data[]=$Transport_datas;
	
    		$Driver_id=$Transport_data[$i]['driver_id'];
    		$Driver_data_table=mysqli_query($connection,"SELECT * FROM `drivers` WHERE `id`='$Driver_id'");
    		$Driver_data=mysqli_fetch_assoc($Driver_data_table);
    		$Drivers_data[]=$Driver_data;

            $Total_rate+=$Transport_data[$i]['rate'];

    		$response[$i]=array(
              'id'=>$Transport_data[$i]['id'],
        	  'carrier_name_company'=>$Carriers[$i],
        	  'tractor'=>$Transports_data[$i]['tractor'],
        	  'trailer'=>$Transports_data[$i]['trailer'],
        	  'country'=>$Transports_data[$i]['country'],
        	  'mark'=>$Transports_data[$i]['mark'],
        	  'driver_first_name'=>$Drivers_data[$i]['driver_first_name'],
        	  'driver_last_name'=>$Drivers_data[$i]['driver_last_name'],
        	  'driver_seria_pass'=>$Drivers_data[$i]['driver_seria_pass'],
        	  'driver_number_pass'=>$Drivers_data[$i]['driver_number_pass'],
              'driver_country'=>$Drivers_data[$i]['driver_country'],
              'driver_text'=>$Drivers_data[$i]['driver_text'],
              'rate'=>$Transport_data[$i]['rate'],
        	  'rate_currency'=>$Transport_data[$i]['rate_currency'],
              'truck_id'=>$Transport_id
        	);
        }
        die( json_encode(array(
    			$response,
                'total_rate'=>$Total_rate,
                'total_currency'=>$Total_currency,
                'carriers_ids'=>$carriers_ids,
                'count_carriers'=>count($carriers_ids)
    		)));


    	
	}
?>
