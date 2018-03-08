<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $cmd = "sudo /usr/bin/python API/offer_logic_title.py $username";
  system($cmd);
?>
