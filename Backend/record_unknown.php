<?php
header("Access-Control-Allow-Origin:*");
	$all_words = $_POST['all_words'];
  $username = $_POST['username'];
  $article_id = $_POST['article_id'];
  $cmd = "sudo /usr/bin/python API/storage_word.py {$username} {$article_id} {$all_words}";
  system($cmd);
  echo "success";
?>
