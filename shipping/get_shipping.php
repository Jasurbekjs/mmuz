<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  header('Access-Control-Allow-Methods: GET');

  $request = $_GET['id'];
  if(!empty($request))
  {
    require_once "../auth/config.php";

    $Shipping_data_table=mysqli_query($connection,"SELECT * FROM `logistics` WHERE `id`='$request'");
    $Shipping_data=mysqli_fetch_assoc($Shipping_data_table);
    $Company_id=$Shipping_data['company_id'];
    $Company_data_table=mysqli_query($connection,"SELECT * FROM `companies` WHERE `id`='$Company_id'");
    $Company_data=mysqli_fetch_assoc($Company_data_table);
    die( json_encode(array(
        'type_transportation'=>$Shipping_data['type_transportation'],
        'load_transportation'=>$Shipping_data['load_transportation'],
        'incoterm'=>$Shipping_data['incoterm'],
        'from_country'=>$Shipping_data['from_country'],
        'to_country'=>$Shipping_data['to_country'],
        'from_city'=>$Shipping_data['from_city'],
        'to_city'=>$Shipping_data['to_city'],
        'status'=>$Shipping_data['status'],
        'comments'=>$Shipping_data['comments'],
        'rate_for_client'=>$Shipping_data['rate_for_client'],
        'rate_for_client_currency'=>$Shipping_data['rate_for_client_currency'],
        'rate_for_carrier'=>$Shipping_data['rate_for_carrier'],
        'rate_for_carrier_currency'=>$Shipping_data['rate_for_carrier_currency'],
        'quantity_tractors'=>$Shipping_data['quantity_tractors'],
        'name_company'=>$Company_data['name_company'],
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
        'street_company_eng'=>$Company_data['street_company_eng']
      )));
  }
?>