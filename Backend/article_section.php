<?php
header("Access-Control-Allow-Origin:*");
$cmd = "sudo /usr/bin/python API/article_section.py {$_POST['articleId']}";
system($cmd);

?>
