<?php
header("Access-Control-Allow-Origin:*");
$requestXiaolei = $_POST['requestXiaolei'];
system("sudo python API/offer_lunshuowen_skill_content.py {$requestXiaolei}");
 ?>
