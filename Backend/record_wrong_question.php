<?php
header("Access-Control-Allow-Origin:*");
	$username = $_POST['username'];
	$article_id = $_POST['article_id'];
	$wrong_question_ids = $_POST['wrong_question_ids'];
  if($_POST['time'] == '1' ){
	   $cmd = "/usr/bin/python API/get_wrong_question.py {$username} {$article_id} ${wrong_question_ids}";
  }
  else{
    $cmd = "/usr/bin/python API/get_wrong_question_second.py {$username} {$article_id} ${wrong_question_ids}";
  }
  system($cmd);
?>
