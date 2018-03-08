<?php
header("Access-Control-Allow-Origin:*");
$dalei = $_POST['jiqiao_dalei_name'];
$xiaolei = $_POST['jiqiao_xiaolei_name'];
system("sudo python API/offer_lunshuowen_content_content.py { $dalei } { $xiaolei }");
 ?>
