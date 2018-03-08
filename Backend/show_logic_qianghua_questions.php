<?php
header("Access-Control-Allow-Origin:*");
system("sudo /usr/bin/python API/show_logic_quanghua_questions_new.py {$_POST['username']} ")
 ?>
