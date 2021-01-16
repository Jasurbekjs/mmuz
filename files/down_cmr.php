<?php
	$folder=$_GET['folder'];
	$logistics_id=$_GET['logistics_id'];
	$truck_id=$_GET['truck_id'];
	$path=$_GET['path'];
	echo $folder.'/CMR_'.$logistics_id.'_'.$truck_id.'_'.$path;

	?>
		<a class="btn btn-block btn-success" href="<?php echo $folder.'/'.$path ?>" id="down" download>Скачать</a>
	<?php		
	
?>

<script>
	var down=document.getElementById('down');
	down.click();
	function sayHi() {
		window.close()
	}
	setTimeout(sayHi, 300);
</script>
