<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
$useList = $_POST['useList'];
$wrongList = $_POST['wrongList'];
$wordCount = $_POST['wordCount'];
$cmd = "sudo /usr/bin/python API/record_wordtest.py $username $useList $wrongList $wordCount";
system($cmd);
 ?>
