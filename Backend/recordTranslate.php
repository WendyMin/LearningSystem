<?php
header("Access-Control-Allow-Origin:*");
$cmd = "sudo /usr/bin/python API/storage_ch_to_eng.py {$_POST['articleId']}";
system($cmd);
 ?>
