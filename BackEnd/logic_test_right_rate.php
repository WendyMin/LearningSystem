<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
$right_rate0 = $_POST['right_rate0'];
$right_rate1 = $_POST['right_rate1'];
$right_rate2 = $_POST['right_rate2'];
$right_rate3 = $_POST['right_rate3'];
$right_rate4 = $_POST['right_rate4'];
$right_rate5 = $_POST['right_rate5'];
$right_rate6 = $_POST['right_rate6'];
$right_rate7 = $_POST['right_rate7'];
$right_rate8 = $_POST['right_rate8'];
$right_rate9 = $_POST['right_rate9'];
$right_rate10 = $_POST['right_rate10'];
$right_rate11 = $_POST['right_rate11'];
$right_rate12 = $_POST['right_rate12'];
$right_rate13 = $_POST['right_rate13'];
$right_rate14 = $_POST['right_rate14'];
#$right_rate = $_POST['right_rate'];
#print_r ($right_rate);
system("python API/jieshou_logic_user_test1.py {$username} {$right_rate0} {$right_rate1} {$right_rate2} {$right_rate3} {$right_rate4} {$right_rate5} {$right_rate6} {$right_rate7} {$right_rate8} {$right_rate9} {$right_rate10} {$right_rate11} {$right_rate12} {$right_rate13} {$right_rate14}" );
#system("/usr/bin/python API/logic_test_new1.py" );
?>