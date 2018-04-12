<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $cmd = "/usr/bin/python API/offer_finished_article.py {$username}";
  system($cmd);
?>