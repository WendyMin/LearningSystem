<?php
   header("Access-Control-Allow-Origin:*");
     $username = $_POST['username'];
     system("sudo /usr/bin/python API/offer_logic_course.py {$username}");
    ?>
