<?php
header("Access-Control-Allow-Origin:*");
$cmd = "sudo /usr/bin/python API/eng_to_ch.py {$_POST['articleId']}";
system( $cmd );
 ?>
