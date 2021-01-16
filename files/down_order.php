<?php
	$folder=$_GET['folder'];
	$order_number=$_GET['order_number'];
	$carrier_name=$_GET['carrier_name'];
	$client_name=$_GET['client_name'];
	$logistics_id=$_GET['logistics_id'];
	$carrier_id=$_GET['carrier_id'];
	$client_id=$_GET['client_id'];
	$path=$_GET['path'];
	echo $folder.'/Order_'.$order_number.'_'.$carrier_name.'_'.$logistics_id.'_'.$carrier_id.'_'.$path;

	if($folder=='orders_client')
	{
		?>
			<a class="btn btn-block btn-success" href="<?php echo 'orders/client/'.$path ?>" id="down" download>Скачать</a>
		<?php
	}
	if($folder=='orders')
	{
		?>
			<a class="btn btn-block btn-success" href="<?php echo $folder.'/'.$path ?>" id="down" download>Скачать</a>
		<?php		
	}
	if($folder=='contracts')
	{
		?>
			<a class="btn btn-block btn-success" href="<?php echo $folder.'/'.$path ?>" id="down" download>Скачать</a>
		<?php	
	}
?>

<script>
	var down=document.getElementById('down');
	down.click();
	function sayHi() {
		window.close()
	}
	setTimeout(sayHi, 300);
</script>
