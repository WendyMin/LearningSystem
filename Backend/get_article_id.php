<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $cmd = "/usr/bin/python API/offer_passageid.py $username";
  system($cmd);
?>
