<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$id=$_POST['id'];
	$company_name=$_POST['company_name'];
	$contract_number = $_POST['contract_number'];

	$contract_date=$_POST['contract_date'];
	$contract_currency=$_POST['contract_currency'];
	$contract_amount=$_POST['contract_amount'];
	$contract_comment=$_POST['contract_comment'];
	$user=$_POST['user'];
	$today=date('Y-m-d');
	if(!empty($id))
	{
		require_once'../auth/config.php';

		$Update_Contracts=mysqli_query($connection,"
		UPDATE `contracts` SET
		`contract_number`='$contract_number',
		`contract_date`='$contract_date',
		`contract_currency`='$contract_currency',
		`contract_amount`='$contract_amount',
		`edit_operator`='$user',
		`edit_date`='$today',
		`contract_comment`='$contract_comment' WHERE `id`='$id'");
	}
    die( json_encode(array(
        'result'=>$Update_Contracts
    )));
?>
