<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("python API/offer_lunzheng_gonggu_content.py {$requestQuestion}");
#system("python API/offer_lunzheng_gonggu_content.py ");
 ?>
