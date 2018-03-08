<?php
header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  system("sudo /usr/bin/python API/offer_finished_ariticle.py {$username}");
 ?>
