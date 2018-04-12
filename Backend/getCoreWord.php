<?php
header("Access-Control-Allow-Origin:*");
  $cmd = "/usr/bin/python API/offer_core_word.py {$_POST['articleId']}";
  system($cmd);
?>