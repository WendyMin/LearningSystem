<?php
header("Access-Control-Allow-Origin:*");
if(isset($_POST['username'])){
  $username = $_POST['username'];
  system("python API/show_question.py");
}
?>
