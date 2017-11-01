<?php


if(isset($_POST['submit'])){
	session_start();
    $data_missing = array();
    if(empty($_POST['fname'])){
        // Adds name to array
        $data_missing[] = 'First Name';
    } else {
        // Trim white space from the name and store the name
        $fname = trim($_POST['fname']);
    }
    if(empty($_POST['lname'])){
        // Adds name to array
        $data_missing[] = 'Last Name';
    } else{
        // Trim white space from the name and store the name
        $lname = trim($_POST['lname']);
    }
    if(empty($_POST['email'])){
        // Adds name to array
        $data_missing[] = 'Email';
    } else {
        // Trim white space from the name and store the name
        $email = trim($_POST['email']);
    }
    if(empty($_POST['password'])){
        // Adds name to array
        $data_missing[] = 'password';
    } else {
        // Trim white space from the name and store the name
        $password = trim($_POST['password']);
	}
    if(empty($data_missing)){
		$servername = "localhost";
		$username = "root";
		$password = "root";
// Create connection
	$dbc = new mysqli($servername, $username, $password);

	// Check connection
	if ($dbc->connect_error) {
		die("Connection failed: " . $dbc->connect_error);
	} 
	//echo "Connected successfully";
	
        $query = "INSERT INTO user (fname, lname, email, password)
        VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($dbc, $query);
        i Integers
        d Doubles
        b Blobs
        s Everything Else
        mysqli_stmt_bind_param($stmt, "ssss", $fname,
                               $lname, $email, $password);

        mysqli_stmt_execute($stmt);
        $affected_rows = mysqli_stmt_affected_rows($stmt);
        if($affected_rows == 1){
            echo 'New User Created';
            mysqli_stmt_close($stmt);
            mysqli_close($dbc);
        } else {
            echo 'Error Occurred<br />';
            echo mysqli_error();
            mysqli_stmt_close($stmt);
            mysqli_close($dbc);
        }
    } else {
        echo 'You need to enter the following data<br />';
        foreach($data_missing as $missing){
            echo "$missing<br />";
        }
    }
}
?>
