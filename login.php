<?php
$connect=mysqli_connect("localhost","root","","erp");

if(!isset($_GET['Login'])){
    $user=$_GET['user'];
    $cat=$_GET['cat'];
    $pass=$_GET['password'];

$query="select * from user where user='$user' && password='$pass' ";
$res=mysqli_query($connect,$query);
$row=mysqli_num_rows($res);
if($row>0 && $cat=='DBK9X0'){
    echo "<script> location.href='../erp/profile.html';</script>";
}
else{
    echo"<script> alert('INCORRECT');</script>";
}
}
?>
