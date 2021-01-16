<?php
	header('Access-Control-Allow-Origin: *');
 	header('Content-type: application/json');
  header('Access-Control-Allow-Methods: POST');

    //$Logistic_id=$_POST['id'];
  	$Logistic_id=14;




  	if(!empty($Logistic_id))
  	{
  		require_once "../auth/config.php";

      $Setting_Stat_Us=mysqli_query($connection,"SELECT * FROM `shipping` WHERE `logistics_id`='$Logistic_id'");
      $duo=array();
      while($set=mysqli_fetch_assoc($Setting_Stat_Us))
      {
        $duo[]['truck_id']=$set['transport_id'];
      }

  		$Select_Stat_Us=mysqli_query($connection,"SELECT * FROM `truck_status` WHERE `logistics_id`='$Logistic_id'");
      $Stat_Us=array();
      while($stat=mysqli_fetch_assoc($Select_Stat_Us))
      {
        $Stat_Us[]=$stat;
      }

      for($i=0;$i<count($duo);$i++)
      {
        for($j=0;$j<count($Stat_Us);$j++)
        {
          if($duo[$i]['truck_id']==$Stat_Us[$j]['truck_id'])
          {
            $duo[$i]['status']=$Stat_Us[$j]['status'];
            $duo[$i]['status_date']=$Stat_Us[$j]['status_date'];
          }
        }
      }

      //print_r($duo);

  		die( json_encode(array(
				'response'=>$Stat_Us,
				'Select_Stat_Us'=>$Select_Stat_Us,
        'duo'=>$duo
			)));
  	}