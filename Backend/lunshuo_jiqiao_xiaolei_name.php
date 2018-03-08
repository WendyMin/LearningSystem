<?php
header("Access-Control-Allow-Origin:*");
jiaiqo_dalei_name = "题型突破";
$request = $_POST['jiqiao_dalei_name'];
$cmd = "sudo /usr/bin/python API/offer_lunshuowen_skill_content.py {$request}";
system($cmd);
 ?>
