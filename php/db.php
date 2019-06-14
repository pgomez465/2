<?php
$servername = "spark3";
$username = "weblively";
$password = "ajWiFp%UeFGQ";
$dbname = "weblivel_users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo"<script>alert('Database connection failed');</script>";
} 
?>






