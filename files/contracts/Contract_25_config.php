<?php
	date_default_timezone_set("Asia/Tashkent");
	$config = array(
		'db' => array(
			'server' => '127.0.0.1',
			'username' => 'root',
			'password' => '',
			'name_db' => 'mmuz'
		)
	);
	$connection=mysqli_connect(
    	$config[db][server],
    	$config[db][username],
    	$config[db][password],
    	$config[db][name_db]);
	if( $connection == false )
	{
		echo mysqli_connect_error();
		exit();
	}
	mysqli_query($connection,"SET NAMES 'utf8';");
?>