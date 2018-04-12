<?php
header("Access-Control-Allow-Origin:*");
  $words = $_POST['query_words'];
  $cmd = "sudo /usr/bin/python API/query_word.py {$words}";
  system($cmd);
?>
<?php
header("Access-Control-Allow-Origin:*");
  $words = $_POST['query_words'];
  $cmd = "/usr/bin/python API/query_word.py {$words}";
  system($cmd);
?>
