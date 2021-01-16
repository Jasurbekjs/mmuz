<?php
	date_default_timezone_set("Asia/Tashkent");
	$connection=mysqli_connect(
    	'localhost:3306',
    	'hestiaJas_gbh',
    	'hestiaJas_gbh13',
    	'mmuz');
	if( $connection == false )
	{
		echo mysqli_connect_error();
		exit();
	}
	mysqli_query($connection,"SET NAMES 'utf8';");
?>