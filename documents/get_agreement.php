<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$request=$_GET['id'];
  	
	if(!empty($request))
	{
		require_once "../auth/config.php";

        $Logistics_table=mysqli_query($connection,"SELECT * FROM `logistics` WHERE `id`='$request'");
        $Logistics=mysqli_fetch_assoc($Logistics_table);
        $Client_id=$Logistics['company_id'];

		$Transport_data_table=mysqli_query($connection,"SELECT * FROM `shipping` WHERE `logistics_id`='$request'");
    	$Transport_data=array();
    	while($transport=mysqli_fetch_assoc($Transport_data_table))
    	{
    		$Transport_data[]=$transport;
    	}
        $carriers_ids=array();
        $carriers_name=array();
        $directors=array();
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
            
        }
        $numbers=array(array());
        $dates=array(array());
        $contract_ids=array(array());

        
        for( $i=0; $i<count($carriers_ids); $i++)
    	{
    		$ids=$carriers_ids[$i];
        	$Carriers_name_table=mysqli_query($connection,"SELECT `id`,`name_company`,`director_company` FROM `carriers` WHERE `id`='$ids'");
        	$Carrier_name=mysqli_fetch_assoc($Carriers_name_table);
        	$carriers_name[]=$Carrier_name['name_company'];
        	$directors[]=$Carrier_name['director_company'];

            $request=$Carrier_name['id'];

            $Contracts_table=mysqli_query($connection,"SELECT `id`,`contract_number`,`contract_date` FROM `contracts` WHERE `company_id`='$request' AND (`contract_type`='mmclient' OR `contract_type`='tsclient')");
            $Contracts=array();
            while($contract=mysqli_fetch_assoc($Contracts_table))
            {
                $Contracts[]=$contract;
            }
            
            for($j=0; $j<count($Contracts);$j++)
            {
                $numbers[$i][]=$Contracts[$j]['contract_number'];
                $dates[$i][]=$Contracts[$j]['contract_date'];
                $contract_ids[$i][]=$Contracts[$j]['id'];
            }

            

        }

        $Orders_number=array();
        $Orders_date=array();
        $order_doc=array();
        $Orders_path=array();
        $order_id=$_GET['id'];
        $Orders_table=mysqli_query($connection,"SELECT * FROM `orders` WHERE `logistics_id`='$order_id'");
        $Orders=array();
        while($order=mysqli_fetch_assoc($Orders_table))
        {
            $Orders[]=$order;
        }
        for($j=0;$j<count($Orders);$j++)
        {
            $Orders_number[]=$Orders[$j]['order_number'];
            $Orders_date[]=$Orders[$j]['order_date'];
            $Orders_path[]=$Orders[$j]['path'];
        }

        $response=array(
              'name_company'=>$Comapny_name,
              'company_id'=>$Company_id,
              'id'=>$carriers_ids,
              'name'=>$carriers_name,
              'contract_number'=>$numbers,
              'contract_date'=>$dates,
              'contract_id'=>$contract_ids,
              'count'=>count($carriers_ids),
              'orders_number'=>$Orders_number,
              'orders_date'=>$Orders_date,
              'order_path'=>$Orders_path
        	);
        die( json_encode(array(
                'response'=>$response
    		)));

	}

 ?>