<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$id=$_POST['id'];
 	$carrier_id=$_POST['carrier_id'];
 	$order_number=$_POST['order_number'];
 	$order_date=$_POST['order_date'];
 	$contract_id=$_POST['contract_id'];

	if(!empty($carrier_id))
	{
		require_once'../auth/config.php';
		$Orders_table=mysqli_query($connection,"SELECT * FROM `orders` WHERE `logistics_id`='$id' AND `carrier_id`='$carrier_id'");
		$Orders=mysqli_fetch_assoc($Orders_table);
		if($Orders==NULL)
		{
			$Insert_order=mysqli_query($connection,"
			INSERT INTO `orders`(`id`,`logistics_id`, `carrier_id`, `contract_id`, `order_number`, `order_date`, `path`) 
			VALUES (NULL, '$id', '$carrier_id', '$contract_id', '$order_number', '$order_date', '')");
		}
		elseif ($Orders!=NULL)
		{
			$Update_order=mysqli_query($connection,"
			UPDATE `orders` SET 
			`contract_id`='$contract_id',
			`order_number`='$order_number',
			`order_date`='$order_date' WHERE `logistics_id`='$id' AND `carrier_id`='$carrier_id'");
		}

	}

    die( json_encode(array(
            'insert_result'=>$Insert_order,
            'update_result'=>$Update_order
    		)));
?>
