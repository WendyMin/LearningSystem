<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $cmd = "/usr/bin/python API/query_sentence.py {$username} {$_POST['lock']} {$_POST['articleId']}";
  system($cmd);
?>
