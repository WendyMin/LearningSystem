<?php
header("Access-Control-Allow-Origin:*");
  $cmd = "/usr/bin/python API/eng_to_ch.py {$_POST['articleId']}";
  system($cmd);
?>