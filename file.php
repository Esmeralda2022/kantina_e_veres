<?php
$db=mysqli_connect("localhost","root","","example2");
if(!$db){
    die("Error ".mysqli_connect_error());
}


$email = $_POST['email'];


$sql = "INSERT INTO sub ( email ) VALUES (?)";
$stmt = $db->prepare($sql);
$stmt->bind_param("s", $email );

if ($stmt->execute()) {
    echo "Do te merrni njoftimet me te fundit!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the database connection
$stmt->close();
$db->close();
?>