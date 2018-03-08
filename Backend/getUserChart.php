<?php
header("Access-Control-Allow-Origin:*");
	$type = $_POST['type'];
	$username = $_POST['username'];
	switch( $type ){
		case 0:
			system("sudo /usr/bin/python API/show_chart.py $usernmae {$_POST['aid']} ");
		break;
	}



?>
