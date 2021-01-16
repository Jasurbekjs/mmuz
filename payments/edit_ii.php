<?php
	  header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

    $logistics_id=$_POST['logistics_id'];
    $editing_id=$_POST['editing_id'];
    $invoice_type=$_POST['invoice_type'];
    $name_payment=$_POST['name_payment'];
    $rate_payment=$_POST['rate_payment'];
    $currency_payment=$_POST['currency_payment'];
    $invoice_number=$_POST['invoice_number'];
    $date_payment=$_POST['date_payment'];
    $status_payment=$_POST['status_payment'];
  	if(!empty($logistics_id))
  	{
  		if($date_payment=='')
  		{
  			$date_payment=date('Y-m-d');
  		}

  		require_once "../auth/config.php";

  		$Update_Payment=mysqli_query($connection,"UPDATE `payment` SET 
        `invoice_type`='1',
        `name_payment`='$name_payment',
        `rate_payment`='$rate_payment',
        `currency_payment`='$currency_payment',
        `invoice_number`='$invoice_number',
        `date_payment`='$date_payment',
        `status_payment`='$status_payment' WHERE `id`='$editing_id'");

  		die( json_encode(array(
        	'response'=>$Update_Payment
    	)));	
  	}




  	 
?>