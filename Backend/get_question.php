<?php
header("Access-Control-Allow-Origin:*");
	if(isset($_POST['username'])){
		$username = $_POST['username'];
		system("sudo /usr/bin/python API/show_question.py {$username} {$_POST['lock']} {$_POST['articleId']}");
	}
?>
