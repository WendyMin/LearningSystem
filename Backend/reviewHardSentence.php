<?php
header("Access-Control-Allow-Origin:*");
system("sudo /usr/bin/python API/offer_core_word.py {$_POST['username']} {$_POST['articleId']}");
 ?>
