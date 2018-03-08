<?php
header("Access-Control-Allow-Origin:*");
system("sudo python API/offer_logictype_introduce.py {$_POST['username']}");
 ?>
