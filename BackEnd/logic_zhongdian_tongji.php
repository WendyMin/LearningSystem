<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
$dalei = $_POST['dalei'];
$question_id = $_POST['question_id'];
$RightOrWrong = $_POST['RightOrWrong'];
system("/usr/bin/python API/jieshou_logic_zhongdian.py {$username} {$dalei} {$question_id} {$RightOrWrong}" );
?>