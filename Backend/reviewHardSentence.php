<?php
header("Access-Control-Allow-Origin:*");
system("sudo /usr/bin/python API/offer_finished_ariticle.py {$_POST['username']}");
 ?>
