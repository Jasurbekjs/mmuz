<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$id=$_POST['id'];
 	$truck_id=$_POST['truck_id'];
 	$today=date('Y-m-d');

	if(!empty($truck_id))
	{
	    $uploaddir = '../files/cmrs/';
	    $name='CMR_'.$id.'_'.$truck_id.'_'.translit(basename($_FILES['file']['name']));
		$uploadfile = $uploaddir.$name;
		$move=move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
	}

	if($move && !empty($id))
	{
		require_once'../auth/config.php';
		$CMR_table=mysqli_query($connection,"SELECT * FROM `cmr` WHERE `logistics_id`='$id' AND `transport_id`='$truck_id'");
		$CMR=mysqli_fetch_assoc($CMR_table);
		if($CMR==NULL)
		{
			$Insert_CMR_file=mysqli_query($connection,"
			INSERT INTO `cmr`(`id`, `logistics_id`, `transport_id`, `cmr_number`, `cmr_date`, `path`) 
			VALUES (NULL,'$id','$truck_id','','$today','$name')");
		}
		elseif ($CMR!=NULL)
		{
			$Update_order_file=mysqli_query($connection,"
			UPDATE `cmr` SET 
			`path`='$name' WHERE `logistics_id`='$id' AND `transport_id`='$truck_id'");
		}
		

	}
	function translit($str)
	{
	    $tr = array(
	        "А"=>"A","Б"=>"B","В"=>"V","Г"=>"G",
	        "Д"=>"D","Е"=>"E","Ж"=>"J","З"=>"Z","И"=>"I",
	        "Й"=>"Y","К"=>"K","Л"=>"L","М"=>"M","Н"=>"N",
	        "О"=>"O","П"=>"P","Р"=>"R","С"=>"S","Т"=>"T",
	        "У"=>"U","Ф"=>"F","Х"=>"H","Ц"=>"TS","Ч"=>"CH",
	        "Ш"=>"SH","Щ"=>"SCH","Ъ"=>"","Ы"=>"YI","Ь"=>"",
	        "Э"=>"E","Ю"=>"YU","Я"=>"YA","а"=>"a","б"=>"b",
	        "в"=>"v","г"=>"g","д"=>"d","е"=>"e","ж"=>"j",
	        "з"=>"z","и"=>"i","й"=>"y","к"=>"k","л"=>"l",
	        "м"=>"m","н"=>"n","о"=>"o","п"=>"p","р"=>"r",
	        "с"=>"s","т"=>"t","у"=>"u","ф"=>"f","х"=>"h",
	        "ц"=>"ts","ч"=>"ch","ш"=>"sh","щ"=>"sch","ъ"=>"y",
	        "ы"=>"yi","ь"=>"'","э"=>"e","ю"=>"yu","я"=>"ya",
	    " "=>"_","?"=>"_","/"=>"_","\\"=>"_",
	    "*"=>"_",":"=>"_","*"=>"_","\""=>"_","<"=>"_",
	    ">"=>"_","#"=>"h","|"=>"_"
	    );
	    return strtr($str,$tr);
	}

    die( json_encode(array(
            'Insert_cmr_file'=>$Insert_order_file,
            'Update_cmr_file'=>$Update_order_file,
            'name'=>$name,
            'move'=>$move
    		)));
?>
