<?php
header("Access-Control-Allow-Origin:*");
$requestQuestion = $_POST['requestQuestion'];
system("sudo python API/offer_lunzheng_writing_template_content.py {$requestQuestion}");
 ?>
