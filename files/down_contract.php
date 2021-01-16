<?php
	$id=$_GET['id'];

	if(!empty($id))
	{
		require_once "../auth/config.php";
		$Contracts_table=mysqli_query($connection, "SELECT * FROM `contracts` WHERE `id`='$id'");
		$Contracts=mysqli_fetch_assoc($Contracts_table);
		$contract_number=$Contracts['contract_number'];
		$contract_currency=$Contracts['contract_currency'];
		$contract_path=$Contracts['contract_path'];
		$id=$Contracts['id'];
		$company_id=$Contracts['company_id'];
		$Companies_table=mysqli_query($connection, "SELECT * FROM `companies` WHERE `id`='$company_id'");
		$Companies=mysqli_fetch_assoc($Contracts_table);
		$company_name=$Companies['name_company'];
		$Contracts=mysqli_fetch_assoc($Contracts_table);
		

		echo $path=$contract_path;

		?>
			<a class="btn btn-block btn-success" href="<?php echo 'contracts/'.$path ?>" id="down" download>Скачать</a>
		<?php
	}
?>
__________________
<script>
	var down=document.getElementById('down');
	down.click();
	function sayHi() {
		window.close()
	}
	setTimeout(sayHi, 300);
</script>
