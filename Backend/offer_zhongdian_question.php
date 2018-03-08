<?php
header("Access-Control-Allow-Origin:*");
system("sudo /usr/bin/python API/offer_zhongdian_question.py {$_POST['username']} ")
 ?>
