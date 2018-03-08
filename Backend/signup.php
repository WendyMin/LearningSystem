<?php
header("Access-Control-Allow-Origin:*");
if(isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["password"])){
	$username = $_POST["username"];
	$email = $_POST["email"];
	$password = $_POST["password"];
}
else{
  $username = 'test' + rand(0,1000);
	$email = 'test' + rand(0,1000);
	$password = 'test' + rand(0,1000);
}
	//$stuType = $_POST["stuType"];
  $stuType = 1;
	//$age = $_POST["age"];
  $age = 20;
	//$examType = $_POST["examType"];
  $examType = "superfuck";
	//$major = $_POST["major"];
  $major = "sellmeat";
	//$expectation = $_POST["expectation"];
  $expectation = 9999999999;
	//$id = $_POST["id"];
  $id = -12345;
	$cmd = "sudo /usr/bin/python API/register.py {$username} {$email} {$password} {$stuType} {$age} {$examType} {$major} {$expectation} {$id}";
	system($cmd,$ret);
	switch ($ret) {
		case 0:
			echo json_encode(array("state" => "success"));
			break;
		case 1:
			echo json_encode(array("state" => "name_exist"));
			break;
		case 2:
			echo json_encode(array("state" => "email_exist"));
			break;
	}


?>
