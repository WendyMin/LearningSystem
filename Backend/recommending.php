<?php
header("Access-Control-Allow-Origin:*");
	$username = $_POST['username'];
	$cmd = "sudo /usr/bin/python API/recommending.py {$username}";
	system($cmd);
?>
