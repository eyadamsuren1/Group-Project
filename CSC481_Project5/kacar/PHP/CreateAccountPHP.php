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
        } else {
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
    		$database = "kacar";

            $dbc = mysqli_connect($servername, $username, $password, $database);

            // Check connection
            if (mysqli_connect_errno()) {
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
            }
            echo "Connected successfully";
            	
            $query = "INSERT INTO user (fname, lname, email, password)
            VALUES ('".$fname."','".$lname."', '".$email."', '".$password."')";
            if($dbc->query($query) === TRUE) {
                echo 'New User Created';
            } else {
                echo 'Error Occurred<br />';
                echo mysqli_error();
            }
        } else {
            echo 'You need to enter the following data<br />';
            foreach($data_missing as $missing) {
                echo "$missing<br />";
            }
        }
        mysqli_close($dbc);
    }
?>