<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
system("/usr/bin/python API/offer_logic_qianghua1.py ${username}" );
?>