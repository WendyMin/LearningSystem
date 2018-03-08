<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $cmd = "sudo /usr/bin/python API/offer_unit.py $username";
  system($cmd);
?>
