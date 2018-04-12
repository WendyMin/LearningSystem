<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $cmd = "/usr/bin/python API/show_error_question.py {$username} {$_POST['articleId']}";
  system($cmd);
?>
