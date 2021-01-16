<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$request=$_GET['carrier_id'];
  	
	if(!empty($request))
	{
		require_once "../auth/config.php";
		
		$Contracts_table=mysqli_query($connection,"SELECT `contract_number`,`contract_date` FROM `contracts` WHERE `company_id`='$request'");
    	$Contracts=array();
    	while($contract=mysqli_fetch_assoc($Contracts_table))
    	{
    		$Contracts[]=$contract;
    	}
        $numbers=array();
        $dates=array();
        for($i=0; $i<count($Contracts);$i++)
        {
            $numbers[]=$Contracts[$i]['contract_number'];
            $dates[]=$Contracts[$i]['contract_date'];
        }
        die( json_encode(array(
                'numbers'=>$numbers,
                'dates'=>$dates
    		)));

	}

 ?>