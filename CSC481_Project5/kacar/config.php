<?php
$db_host='localhost';
$db_user='root';
$db_pwd='root';
$database='kacar';

if(!mysql_connect($db_host,$db_user,$db_pwd))
die("can't connect to database!");

if(!mysql_select_db($database))
die("can't select database!");
?>
