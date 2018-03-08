<?php
header("Access-Control-Allow-Origin:*");
  $hard_sentence_ids = $_POST['hard_sentence_ids'];
	$username = $_POST['username'];
	$article_id = $_POST["article_id"];
	$cmd = "sudo /usr/bin/python API/storage_hard_sentence.py {$username} {$article_id} {$hard_sentence_ids}";
	system($cmd);
?>
