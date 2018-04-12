<?php
header("Access-Control-Allow-Origin:*");
  $articleId = $_POST['articleId'];
  $cmd = "/usr/bin/python API/article_section.py $articleId";
  system($cmd);
?>
