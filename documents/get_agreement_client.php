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
        
        $Company_table=mysqli_query($connection,"SELECT * FROM `companies` WHERE `id`='$Client_id'");
        $Company=mysqli_fetch_assoc($Company_table);

        $Comapny_name=$Company['name_company'];
        $Company_id=$Company['id'];

        $Contracts_number_client=array();
        $Contracts_date_client=array();
        $Contracts_ids_client=array();
		
        $Contracts_client_table=mysqli_query($connection,"SELECT `id`,`contract_number`,`contract_date` FROM `contracts` WHERE `company_id`='$Company_id' AND (`contract_type`='mmforwarder' OR `contract_type`='tsforwarder')");
        $Contracts_client=array();
        while($contract_client=mysqli_fetch_assoc($Contracts_client_table))
        {
            $Contracts_client[]=$contract_client;
        }
        
        for($j=0; $j<count($Contracts_client);$j++)
        {
            $Contracts_number_client[]=$Contracts_client[$j]['contract_number'];
            $Contracts_date_client[]=$Contracts_client[$j]['contract_date'];
            $Contracts_ids_client[]=$Contracts_client[$j]['id'];
        }

        $order_number_client;
        $order_date_client;
        $order_path_client;

        $Orders_client_table=mysqli_query($connection,"SELECT * FROM `orders_client` WHERE `logistics_id`='$request'");
        $Orders_client=mysqli_fetch_assoc($Orders_client_table);
        for($l=0;$l<count($Orders_client);$l++)
        {
            $order_number_client=$Orders_client['order_number'];
            $order_date_client=$Orders_client['order_date'];
            $order_path_client=$Orders_client['path'];
        }
        

        $response=array(
              'name_company'=>$Comapny_name,
              'company_id'=>$Company_id,
              'contracts_number_client'=>$Contracts_number_client,
              'contracts_date_client'=>$Contracts_date_client,
              'contracts_id_client'=>$Contracts_ids_client,
              'order_number_client'=>$order_number_client,
              'order_date_client'=>$order_date_client,
              'order_path_client'=>$order_path_client
        	);
        die( json_encode(array(
                'response'=>$response
    		)));

	}

 ?>