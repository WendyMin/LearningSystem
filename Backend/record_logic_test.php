<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
$type_list = $_POST['type_list'];
$wrong_rate_list = $_POST['wrong_rate_list'];
$cmd = "sudo /usr/bin/python API/get_test_wrongrate.py $username $type_list $wrong_rate_list";
system($cmd);
 ?>
