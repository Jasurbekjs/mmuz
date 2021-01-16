<?php
 	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: *');

 	$id=$_POST['id'];
	$file=$_POST['file'];
	$user=$_POST['user'];
	$today=date('Y-m-d');
	if(!empty($id))
	{
	    $uploaddir = '../files/contracts/';
	    $name='Contract_'.$id.'_'.translit(basename($_FILES['file']['name']));
		$uploadfile = $uploaddir .$name;
		$move=move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);

		require_once'../auth/config.php';

		$Update_Contracts=mysqli_query($connection,"
		UPDATE `contracts` SET
		`edit_operator`='$user',
		`edit_date`='$today',
		`contract_path`='$name' WHERE `id`='$id'");
	}
    die( json_encode(array(
        'result'=>$Update_Contracts,
        'path'=>$name,
    )));
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
	    ">"=>"_","|"=>"_"
	    );
	    return strtr($str,$tr);
	}
?>
