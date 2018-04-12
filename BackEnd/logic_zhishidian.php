<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
system("/usr/bin/python API/offer_logic_zhishidian1.py ${username}" );
?>