<?php
header("Access-Control-Allow-Origin:*");
system("sudo python API/storage_zhongdian_type.py {$_POST['username']} {$_POST['type1']} {$_POST['type2']} {$_POST['timu_list']} {$_POST['accuracy_list']}");
?>
