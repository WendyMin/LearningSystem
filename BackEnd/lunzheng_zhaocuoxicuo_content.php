<?php
header("Access-Control-Allow-Origin:*");
  $requestQuestion = $_POST['requestQuestion'];
  $cmd = "python API/offer_lunzheng_zhaocuoxicuo.py {$requestQuestion}";
  system($cmd);
?>
