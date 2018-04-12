<?php
header("Access-Control-Allow-Origin:*");
	$username = $_POST['username'];
	$articleId = $_POST['article_id'];
	$cmd = "/usr/bin/python API/offer_writing.py {$username} {$articleId}";
	system($cmd);
	//for test
	//echo json_encode(array(array( "english" => "E1" , "chinese" => "c1" ),array( "english" => "E2" , "chinese" => "c2" ),array( "english" => "E3" , "chinese" => "c3" )));
?>
