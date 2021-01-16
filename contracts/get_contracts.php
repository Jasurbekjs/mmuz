<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

  	$contract_name=$_POST['contract'];

  	if(!empty($contract_name))
  	{
  		require_once "../auth/config.php";

  		$Contracts_data_table=mysqli_query($connection,"SELECT * FROM `contracts` WHERE `contract_type`='$contract_name'");
  		$Contracts=array();
		  while($contract = mysqli_fetch_assoc($Contracts_data_table))
		  {
		  	$Contracts[]=$contract;
		  }
      
      
      $response=array();
      	for($i=0; $i<count($Contracts);$i++)
      	{
          if($Contracts[$i]['contract_type']=="mmforwarder" || $Contracts[$i]['contract_type']=="tsforwarder")
          {
            $company_id=$Contracts[$i]['company_id'];
            $Company_name_table=mysqli_query($connection,"SELECT `name_company` FROM `companies` WHERE `id`='$company_id'");
            $Company_name=mysqli_fetch_assoc($Company_name_table);
          }
          elseif ($Contracts[$i]['contract_type']=="mmclient" || $Contracts[$i]['contract_type']=="tsclient") 
          {
            $company_id=$Contracts[$i]['company_id'];
            $Company_name_table=mysqli_query($connection,"SELECT `name_company` FROM `carriers` WHERE `id`='$company_id'");
            $Company_name=mysqli_fetch_assoc($Company_name_table);
          }
      	  $response[$i]=array(
      	    	'id'=>$Contracts[$i]['id'],
              'name_company'=>$Company_name['name_company'],
            	'contract_number'=>$Contracts[$i]['contract_number'],
            	'contract_date'=>$Contracts[$i]['contract_date'],
            	'amount'=>$Contracts[$i]['contract_amount'],
            	'currency'=>$Contracts[$i]['contract_currency'],
            	'comments'=>$Contracts[$i]['contract_comment'],
            	'operator'=>$Contracts[$i]['edit_operator']
      	    );
      	}
      	//response
		  die( json_encode(array(
      	      'contract'=>$response
      	    )));  
		  //response
  	}

 ?>