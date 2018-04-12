<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("python API/offer_lunshuowen_hualongdianjing.py {$requestQuestion}" );
#system("python API/offer_lunshuowen_hualongdianjing.py" );
 ?>
