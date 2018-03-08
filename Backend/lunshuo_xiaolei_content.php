<?php
header("Access-Control-Allow-Origin:*");
$dalei = $_POST['dalei'];
$xiaolei = $_POST['xiaolei'];
system("sudo python API/offer_lunshuowen_content_content.py {$dalei} {$xiaolei}" );
 ?>
