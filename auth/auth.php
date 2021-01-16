<?php
	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
 	header('Access-Control-Allow-Methods: GET'); 
	
	$email=$_GET['email'];
	$pass=$_GET['pass'];

  if(!empty($email) && !empty($pass))
  {
	  require_once "config.php";
	  $users_db = mysqli_query( $connection, 'SELECT * FROM `users`' );
    	$users = array();
    	while( $user = mysqli_fetch_assoc($users_db) )
    	{
    	  $users[] = $user;
    	}
    	for($i=0; $i<count($users); $i++)
    	{
    		if($email==$users[$i]['email'] && $pass==$users[$i]['pass'])
    		{
	 		die( json_encode(array(
      		'email' =>$users[$i]['email'],
      		'password'  =>'',
      		'role'	=>$users[$i]['role'],
      		'name'	=>$users[$i]['name']
	 		)) );
    		}
    	}
	}

?>