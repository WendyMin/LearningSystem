<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("sudo python API/offer_lunzheng_analysis_gonggu_question.py {$requestQuestion}");
 ?>
