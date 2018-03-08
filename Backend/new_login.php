<?php
  header("Access-Control-Allow-Origin:*");
  $username = $_POST['username'];
  $password = $_POST['password'];
  system("sudo /usr/bin/python API/new_login.py {$username} {$password}");
 ?>
