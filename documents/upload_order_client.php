<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$id=$_POST['id'];
 	$client_name=$_POST['client_name'];
	$client_id=$_POST['client_id'];
	$order_number_client=$_POST['order_number_client'];
	$order_date_client=$_POST['order_date_client'];
	$contract_id_client=$_POST['contract_id_client'];

	if(!empty($client_id))
	{
		require_once'../auth/config.php';
		$Orders_client_table=mysqli_query($connection,"SELECT * FROM `orders_client` WHERE `logistics_id`='$id' AND `client_id`='$client_id'");
		$Orders_client=mysqli_fetch_assoc($Orders_client_table);
		if($Orders_client==NULL)
		{
			$Insert_order_client=mysqli_query($connection,"
			INSERT INTO `orders_client`(`id`,`logistics_id`, `client_id`, `contract_id`, `order_number`, `order_date`, `path`) 
			VALUES (NULL, '$id', '$client_id', '$contract_id_client', '$order_number_client', '$order_date_client', '')");
		}
		elseif($Orders_client!=NULL)
		{
			$Update_order_client=mysqli_query($connection,"
			UPDATE `orders_client` SET 
			`contract_id`='$contract_id_client',
			`order_number`='$order_number_client',
			`order_date`='$order_date_client' WHERE `logistics_id`='$id' AND `client_id`='$client_id'");
		}		
	}

    die( json_encode(array(
            'Insert_order_client'=>$Insert_order_client,
            'Update_order_client'=>$Update_order_client
    		)));
?>
