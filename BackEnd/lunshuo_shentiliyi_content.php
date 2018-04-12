<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("python API/offer_lunshuowen_shentiliyi.py {$requestQuestion}" );
#system("python API/offer_lunshuowen_shentiliyi.py " );
 ?>
