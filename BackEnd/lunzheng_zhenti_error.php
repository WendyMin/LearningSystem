<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("python API/offer_lunzheng_zhenti_error.py {$requestQuestion}" );
#system("python API/offer_lunzheng_zhenti_error.py " );
 ?>
