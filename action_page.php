<?php
$db=mysqli_connect("localhost","root","","example2");
if(!$db){
    die("Error ".mysqli_connect_error());
}
/*$query="select* from klient";
$stmt=mysqli_query($conn,$query);
while($row=mysqli_fetch_array($stmt,MYSQLI_ASSOC));
echo $row['emri'].'  '.$row['adresa'].'<br>';*/
$emri = $_POST['emri'];
$mbiemri =$_POST['mbiemri'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$mesazhi = $_POST['mesazhi'];
/* $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password for security
$ */

// Insert user data into the database
$sql = "INSERT INTO user (emri ,mbiemri , email, tel , mesazhi) VALUES (?, ?, ?, ?, ?)";
$stmt = $db->prepare($sql);
$stmt->bind_param("sssss", $emri, $mbiemri, $email,$tel, $mesazhi );

if ($stmt->execute()) {
    echo "Kerkesa u dergua me sukses!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the database connection
$stmt->close();
$db->close();
?>
