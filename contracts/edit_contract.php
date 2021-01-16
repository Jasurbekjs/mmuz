<?php
	header('Access-Control-Allow-Origin: *');
  	header('Content-type: application/json');
  	header('Access-Control-Allow-Methods: POST');

  	echo '--'.$id_contract=$_POST['id'];
  	echo '--'.$name_company=$_POST['name_company'];
  	echo '--'.$name_company_eng=$_POST['name_company_eng'];
	echo '--'.$contact_person=$_POST['contact_person'];
	echo '--'.$director_company=$_POST['director_company'];
	echo '--'.$country_company=$_POST['country_company'];
	echo '--'.$region_company=$_POST['region_company'];
	echo '--'.$index_city_company=$_POST['index_city_company'];
	echo '--'.$city_company=$_POST['city_company'];
	echo '--'.$street_company=$_POST['street_company'];
	echo '--'.$contact_number=$_POST['contact_number'];
	echo '--'.$comment_company=$_POST['comment_company'];
	echo '--'.$director_company_eng=$_POST['director_company_eng'];
	echo '--'.$country_company_eng=$_POST['country_company_eng'];
	echo '--'.$region_company_eng=$_POST['region_company_eng'];
	echo '--'.$city_company_eng=$_POST['city_company_eng'];
	echo '--'.$street_company_eng=$_POST['street_company_eng'];
	echo '--'.$contact_person_eng=$_POST['contact_person_eng'];
	echo '--'.$user=$_POST['user'];
	echo '--'.$today=date("Y-m-d");   

	if(!empty($id_contract))
	{
		require_once "../auth/config.php";

		$Contracts_table=mysqli_query($connection, "SELECT * FROM `contracts` WHERE `id`='$id_contract'");
		$Contracts=mysqli_fetch_assoc($Contracts_table);
		$Contract_type=$Contracts['contract_type'];

		if($Contract_type=='mmforwarder' || $Contract_type=='tsforwarder')
		{
			$Companies_table=mysqli_query($connection, "SELECT * FROM `companies` WHERE `name_company`='$name_company'");
			$Company=mysqli_fetch_assoc($Companies_table);
			if($Company!=NULL)
			{
				$ID_COMPANY=$Company['id'];
				$Update_Companies=mysqli_query($connection, "UPDATE `companies` SET 
				`director_company`='$director_company',
				`country_company`='$country_company',
				`region_company`='$region_company',
				`index_city_company`='$index_city_company',
				`city_company`='$city_company',
				`street_company`='$street_company',
				`operator_editor`='$user',
				`operator_editor_date`='$today',
				`name_company_eng`='$name_company_eng',
				`director_company_eng`='$director_company_eng',
				`country_company_eng`='$country_company_eng',
				`region_company_eng`='$region_company_eng',
				`city_company_eng`='$city_company_eng',
				`street_company_eng`='$street_company_eng',
				`contact_person`='$contact_person',	
				`contact_person_eng`='$contact_person_eng',
				`contact_number`='$contact_number',
				`comment_company`='$comment_company' WHERE `name_company`='$name_company'");
			}
			else
			{
				$Insert_Companies=mysqli_query($connection, "INSERT INTO `companies`(`id`, `name_company`, `director_company`, `country_company`, `region_company`, `index_city_company`, `city_company`, `street_company`, `operator_creator`, `operator_creator_date`, `operator_editor`, `operator_editor_date`, `name_company_eng`, `director_company_eng`, `country_company_eng`, `region_company_eng`, `city_company_eng`, `street_company_eng`, `contact_person`, `contact_person_eng`, `contact_number`, `comment_company`) VALUES (NULL,'$name_company','$director_company','$country_company','$region_company','$index_city_company','$city_company','$street_company','$user','$today','$user','$today','$name_company_eng','$director_company_eng','$country_company_eng','$region_company_eng','$city_company_eng','$street_company_eng','$contact_person','$contact_person_eng','$contact_number','$comment_company')");
				$Companies_table=mysqli_query($connection, "SELECT * FROM `companies` WHERE `name_company`='$name_company'");
				$Company=mysqli_fetch_assoc($Companies_table);
				$ID_COMPANY=$Company['id'];
			}
		}
		elseif ($Contract_type=='mmclient' || $Contract_type=='tsclient') 
		{
			$Carriers_table=mysqli_query($connection, "SELECT * FROM `carriers` WHERE `name_company`='$name_company'");
			$Carriers=mysqli_fetch_assoc($Carriers_table);
			if($Carriers!=NULL)
			{
				$ID_COMPANY=$Carriers['id'];
				$Update_Carriers=mysqli_query($connection, "UPDATE `carriers` SET 
				`director_company`='$director_company',
				`country_company`='$country_company',
				`region_company`='$region_company',
				`index_city_company`='$index_city_company',
				`city_company`='$city_company',
				`street_company`='$street_company',
				`operator_editor`='$user',
				`operator_editor_date`='$today',
				`name_company_eng`='$name_company_eng',
				`director_company_eng`='$director_company_eng',
				`country_company_eng`='$country_company_eng',
				`region_company_eng`='$region_company_eng',
				`city_company_eng`='$city_company_eng',
				`street_company_eng`='$street_company_eng',
				`contact_person`='$contact_person',	
				`contact_person_eng`='$contact_person_eng',
				`contact_number`='$contact_number',
				`comment_company`='$comment_company' WHERE `name_company`='$name_company'");
			}
			else
			{
				echo 'Insert';
				$Insert_Carriers=mysqli_query($connection, "INSERT INTO `carriers`(`id`, `name_company`, `director_company`, `country_company`, `region_company`, `index_city_company`, `city_company`, `street_company`, `operator_creator`, `operator_creator_date`, `operator_editor`, `operator_editor_date`, `name_company_eng`, `director_company_eng`, `country_company_eng`, `region_company_eng`, `city_company_eng`, `street_company_eng`, `contact_person`, `contact_person_eng`, `contact_number`, `comment_company`) VALUES (NULL,'$name_company','$director_company','$country_company','$region_company','$index_city_company','$city_company','$street_company','$user','$today','$user','$today','$name_company_eng','$director_company_eng','$country_company_eng','$region_company_eng','$city_company_eng','$street_company_eng','$contact_person','$contact_person_eng','$contact_number','$comment_company')");
				$Carriers_table=mysqli_query($connection, "SELECT * FROM `carriers` WHERE `name_company`='$name_company'");
				$Carriers=mysqli_fetch_assoc($Carriers_table);
				$ID_COMPANY=$Carriers['id'];
			}
		}

		

		$Update_Contracts=mysqli_query($connection,"UPDATE `contracts` SET `company_id`='$ID_COMPANY' WHERE `id`='$id_contract'");
		die( json_encode(array(
                'id_company'=>$ID_COMPANY,
                'c_type'=>$Contract_type,
                'insert'=>$Insert_Carriers
    		)));
	}






?>