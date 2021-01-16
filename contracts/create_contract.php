<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$contract_type=$_POST['contract_type'];

 	$user=$_POST['user'];
 	$today=date('Y-m-d');
 	if($contract_type)
 	{
 		require_once'../auth/config.php';

 		$Create_contract=mysqli_query($connection,"INSERT INTO `contracts`(`id`, `contract_type`, `company_id`, `contract_number`, `contract_date`, `contract_currency`, `contract_amount`, `edit_operator`, `edit_date`, `contract_comment`, `contract_path`) VALUES (NULL,'$contract_type','0','','2000-01-01','','0','$user','$today','','')");
 		$Contracts_table=mysqli_query($connection,"SELECT MAX(`id`) AS id FROM `contracts`");
    	$Contracts=mysqli_fetch_assoc($Contracts_table);
    	$Max_contract_id=$Contracts['id'];
    	die( json_encode(array(
            'id'=>$Max_contract_id
    		)));
 	}
 	

?>