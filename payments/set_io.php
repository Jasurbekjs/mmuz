<?php
  header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    header('Access-Control-Allow-Methods: POST');

    $logistics_id=$_POST['logistics_id'];
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

      $Insert_Payment=mysqli_query($connection,"INSERT INTO `payment`(`id`, `invoice_type`, `name_payment`, `rate_payment`, `currency_payment`, `invoice_number`, `date_payment`, `status_payment`, `logistics_id`) VALUES (NULL,'0','$name_payment','$rate_payment','$currency_payment','$invoice_number','$date_payment','$status_payment','$logistics_id')");
    


      $response=$logistics_id;

      die( json_encode(array(
          'response'=>$Insert_Payment
      )));  
    }




     
?>