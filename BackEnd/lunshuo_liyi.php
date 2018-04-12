<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("python API/offer_lunshuowen_liyi.py {$requestQuestion}" );
#system("python API/offer_lunshuowen_liyi.py " );
 ?>
