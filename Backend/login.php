<?php
header("Access-Control-Allow-Origin:*");
if(isset($_POST["username"]) && isset($_POST["password"])){
	$user = $_POST["username"];
	$password = $_POST["password"];
	$cmd = "sudo /usr/bin/python API/login.py {$user} {$password}";
	system($cmd,$ret);
	switch ($ret) {
		case 0:
			echo json_encode(array("state" => "init","name" => $user));
			break;
		case 1:
			echo json_encode(array("state" => "mult","name" => $user));
			break;
		case 2:
			echo json_encode(array("state" => "none","name" => $user));
			break;
		case 3:
			echo json_encode(array("state" => "wrong","name" => $user));
			break;
	}
}
else{
	echo 'you have been recorded';
}
?>
