<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$id=$_POST['id'];
	$client_id=$_POST['client_id'];

	if(!empty($client_id))
	{
	    $uploaddir = '../files/orders/client/';
	    $name='Order_'.$id.'_'.$client_id.'_'.translit(basename($_FILES['file']['name']));
		$uploadfile = $uploaddir .$name;
		$move=move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
	}
	if($move && !empty($id))
	{
		require_once'../auth/config.php';
		$Orders_client_table=mysqli_query($connection,"SELECT * FROM `orders_client` WHERE `logistics_id`='$id' AND `client_id`='$client_id'");
		$Orders_client=mysqli_fetch_assoc($Orders_client_table);
		if($Orders_client==NULL)
		{
			$Insert_order_client=mysqli_query($connection,"
			INSERT INTO `orders_client`(`id`,`logistics_id`, `client_id`, `contract_id`, `order_number`, `order_date`, `path`) 
			VALUES (NULL, '$id', '$client_id', '', '', '2000-01-01', '$name')");
		}
		elseif ($Orders_client!=NULL)
		{
			$Update_order_file=mysqli_query($connection,"
			UPDATE `orders_client` SET 
			`path`='$name' WHERE `logistics_id`='$id' AND `client_id`='$client_id'");
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
            'Insert_order_file'=>$Insert_order_file,
            'Update_order_file'=>$Update_order_file,
            'name'=>$name,
            'move'=>$move
    		)));
?>
