<?php
	header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: POST');
//inputs
  	$user=$_POST['email'];
//inputs
  	
    if(!empty($user))
    {
      //operations
      include "../auth/config.php";
      $today=date('Y-m-d');
      //operations

      $Insert_logistics=mysqli_query($connection,"
        INSERT INTO `logistics`(`id`, `type_transportation`, `load_transportation`, `incoterm`, `from_country`, `to_country`, `from_city`, `to_city`, `status`, `create_operator`, `created_date`, `comments`, `company_id`, `rate_for_client`, `rate_for_client_currency`) 
        VALUES (NULL,0,'','','','','','','','$user','$today','',0,0,'')");
      $Logistics_table=mysqli_query($connection,"SELECT MAX(`id`) AS id FROM `logistics`");
      $Logistics=mysqli_fetch_assoc($Logistics_table);
      $Max_Logistics_id=$Logistics['id'];
      
      //response
      die( json_encode(array(
              'id'=>$Max_Logistics_id
            )));  
      //response
    }
?>