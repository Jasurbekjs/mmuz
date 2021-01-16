<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: GET');

  	$id=$_GET['id'];

  	if(!empty($id))
  	{
  		require_once "../auth/config.php";

  		$Contracts_table=mysqli_query($connection,"SELECT * FROM `contracts` WHERE `id`='$id'");
		  $Contracts = mysqli_fetch_assoc($Contracts_table);
      $Company_id=$Contracts['company_id'];
      $Contract_type=$Contracts['contract_type'];
      if($Contract_type=='mmforwarder' || $Contract_type=='tsforwarder')
      {
        $Companies_table=mysqli_query($connection,"SELECT * FROM `companies` WHERE `id`='$Company_id'");
        $Companies = mysqli_fetch_assoc($Companies_table);
      }
      elseif ($Contract_type=='mmclient' || $Contract_type=='tsclient') 
      {
        $Companies_table=mysqli_query($connection,"SELECT * FROM `carriers` WHERE `id`='$Company_id'");
        $Companies = mysqli_fetch_assoc($Companies_table);
      }
      

      $response=array(
        'contract_type'=>$Contract_type,
        'name_company'=>$Companies['name_company'],
        'director_company'=>$Companies['director_company'],
        'country_company'=>$Companies['country_company'],
        'region_company'=>$Companies['region_company'],
        'index_city_company'=>$Companies['index_city_company'],
        'city_company'=>$Companies['city_company'],
        'street_company'=>$Companies['street_company'],
        'name_company_eng'=>$Companies['name_company_eng'],
        'director_company_eng'=>$Companies['director_company_eng'],
        'country_company_eng'=>$Companies['country_company_eng'],
        'region_company_eng'=>$Companies['region_company_eng'],
        'city_company_eng'=>$Companies['city_company_eng'],
        'street_company_eng'=>$Companies['street_company_eng'],
        'contact_person'=>$Companies['contact_person'],
        'contact_person_eng'=>$Companies['contact_person_eng'],
        'contact_number'=>$Companies['contact_number'],
        'comment_company'=>$Companies['comment_company']
      );
      //response
		  die( json_encode(array(
        $response
      )));  
		  //response
  	}

 ?>