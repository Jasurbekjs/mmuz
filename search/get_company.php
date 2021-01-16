<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: GET');

  $request = $_GET['name_company'];
  if(!empty($request))
  {
    require_once "../auth/config.php";
    
    $Company_data_table=mysqli_query($connection,"SELECT * FROM `companies` WHERE `name_company`='$request'");
    $Company_data=mysqli_fetch_assoc($Company_data_table);
    $Bank_id=$Company_data['bank_id'];
    $Bank_data_table=mysqli_query($connection,"SELECT * FROM `banks` WHERE `id`='$Bank_id'");
    $Bank_data=mysqli_fetch_assoc($Bank_data_table);
    die( json_encode(array(
        'name_company_eng'=>$Company_data['name_company_eng'],
        'director_company'=>$Company_data['director_company'],
        'director_company_eng'=>$Company_data['director_company_eng'],
        'contact_person'=>$Company_data['contact_person'],
        'contact_person_eng'=>$Company_data['contact_person_eng'],
        'contact_number'=>$Company_data['contact_number'],
        'country_company'=>$Company_data['country_company'],
        'country_company_eng'=>$Company_data['country_company_eng'],
        'region_company'=>$Company_data['region_company'],
        'region_company_eng'=>$Company_data['region_company_eng'],
        'city_company'=>$Company_data['city_company'],
        'city_company_eng'=>$Company_data['city_company_eng'],
        'index_city_company'=>$Company_data['index_city_company'],
        'street_company'=>$Company_data['street_company'],
        'street_company_eng'=>$Company_data['street_company_eng'],
        'bank_name_conpany'=>$Bank_data['bank_name_conpany'],
        'bank_name_conpany_eng'=>$Bank_data['bank_name_conpany_eng'],
        'bank_country'=>$Bank_data['bank_country'],
        'bank_country_eng'=>$Bank_data['bank_country_eng'],
        'bank_region'=>$Bank_data['bank_region'],
        'bank_region_eng'=>$Bank_data['bank_region_eng'],
        'bank_index'=>$Bank_data['bank_index'],
        'bank_city'=>$Bank_data['bank_city'],
        'bank_city_eng'=>$Bank_data['bank_city_eng'],
        'bank_street'=>$Bank_data['bank_street'],
        'bank_street_eng'=>$Bank_data['bank_street_eng'],
        'bank_payment_account_usd_company'=>$Bank_data['bank_payment_account_usd_company'],
        'bank_payment_account_eur_company'=>$Bank_data['bank_payment_account_eur_company'],
        'bank_payment_account_sum_company'=>$Bank_data['bank_payment_account_sum_company'],
        'bank_swift'=>$Bank_data['bank_swift'],
        'bank_tin'=>$Bank_data['bank_tin'],
        'bank_mfo'=>$Bank_data['bank_mfo']
      )));
  }

  else
  {
    $Company_data=["Нет данных..."];
    die( json_encode(array(
        'company'=>$Company_data
      )));
  }
?>