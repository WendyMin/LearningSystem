<?php
header("Access-Control-Allow-Origin:*");
$cmd = "sudo /usr/bin/python API/offer_hard_word.py $_POST['username'] $_POST['articleId']";
system( $cmd );
 ?>
