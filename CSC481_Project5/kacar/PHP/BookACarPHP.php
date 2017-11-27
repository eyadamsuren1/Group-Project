<?php
if(isset($_POST['submit'])){
    	session_start();
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
			            
            $query1 = "SELECT * FROM kacar.booked_vehicle WHERE vehicleid ='" . $'vehicleid'."' ";
			
			$result = $dbc->query($query1);
			if($result->$num_rows > 0)
			{
				echo "Vehicle is already booked";
			} else {
				$query2 = "INSERT INTO kacar.booked_vehicle (vehicleid, renterid) VALUES ('".$vehicleid."','".$renterid."')";
				if($dbc->query($query2) === TRUE) {
						echo 'The vehicle is now booked';
				}
				else {
	                echo 'Error Occurred<br />';
	                echo mysqli_error();
				}
			}
        mysqli_close($dbc);
}
?>
