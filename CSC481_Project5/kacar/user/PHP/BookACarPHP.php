<?php
if(isset($_POST['submit'])){
    	session_start();
		
        $data_missing = array();
        if(empty($_POST['renterid'])){
            // Adds name to array
            $data_missing[] = 'Renter Id';

        } else {
            // Trim white space from the name and store the name
            $renterid = trim($_POST['renterid']);
        }
		if(empty($_POST['vehicleid'])){
            // Adds name to array

            $data_missing[] = 'Vehicle Id';
        } else {
            // Trim white space from the name and store the name
            $vehicleid = trim($_POST['vehicleid']);
        }
		if(empty($data_missing)){
			$servername = "localhost";
    		$db_username = "root";
    		$db_password = "root";
    		$database = "kacar";
            $dbc = mysqli_connect($servername, $db_username, $db_password, $database);
            // Check connection
            if (mysqli_connect_errno()) {
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
            }
            echo "Connected successfully";
			            
            $query1 = "SELECT * FROM kacar.booked_vehicles WHERE vehicleid ='" . $vehicleid ."' ";
			$result = $dbc->query($query1);
			
//			echo "query 1";
			if($result->num_rows > 0)
			{
				echo "Vehicle is already booked";
			} else {

				$query2 = "INSERT INTO kacar.booked_vehicles (vehicleid, renterid) VALUES ('".$vehicleid."','".$renterid."')";
				if($dbc->query($query2) === TRUE) {
					
						echo 'The vehicle is now booked';
				}
				else {
	                echo 'Error Occurred<br />';
	                echo mysqli_error();
				}
			}
		}
		else {
            echo 'You need to enter the following data inside <br />';
            foreach($data_missing as $missing) {
                echo "$missing<br />";
            }
        }
        mysqli_close($dbc);
	}

?>
