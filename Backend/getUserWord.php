<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $articleId = $_POST['articleId'];
  $cmd = "/usr/bin/python API/offer_hard_word.py {$username} {$articleId}";
  system($cmd);
?>