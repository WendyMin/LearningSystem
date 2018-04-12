<?php
header("Access-Control-Allow-Origin:*");



$username = "lallalalalal";
$pwd = "aklsklfasf";
$email = "akflkf";
$phone = "124435556";


system("sudo python API/register_new1.py {$username} {$pwd} {$email}{$phone }" );
#system("/usr/bin/python API/logic_test_new1.py" );
?>