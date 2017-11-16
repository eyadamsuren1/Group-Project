<?php  
///test/demo_form.php?name1=value1&name2=value2
//echo 'hello';
if(isset($_POST["email"]) && isset($_POST['password'])) {
	//echo $_POST['email'];
	//echo $_POST['password'];
	$servername = "localhost";
	$username = "root";
	$password = "root";
	
	class User {
		public $userid = "";
		public $firstName = "";
		Public $lastName = "";
		public $email = "";
		public $password = "";
		public $renter_status = "";
		public $profile_pic_dir = "";
		public $vehicles = array();
	}
	class Vehicle {
		public $vehicleid = "";
		public $model = "";
		public $year = "";
		public $vin = "";
		public $miles = "";
	}

	$user = new User();
	$vehicleList = array();
	$mysqli = new mysqli("localhost", "root", "root", "kacar");

	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}

	//$query  = "SELECT * FROM class;";
	//$query = "SELECT * FROM user";
	
	//$sql = "";
	$sql = "SELECT * FROM Kacar.user INNER JOIN Kacar.Vehicles ON user.userid = Vehicles.ownerid AND user.email ='" . $_POST['email'] . "' AND user.password = '" . $_POST['password'] . "';";
	$sql .= "SELECT * FROM Kacar.user WHERE user.email ='" . $_POST['email'] . "' AND user.password = '" . $_POST['password'] . "'";
	
	//echo $sql;
	//$end = FALSE;

	$sql_count = 0;
	/* execute multi query */
	if ($mysqli->multi_query($sql)) {
		do {
			$sql_count += 1;
			/* store first result set */
			if ($result = $mysqli->store_result()) {
				  $rowcount=mysqli_num_rows($result);
				 
				if($sql_count == 1 && $rowcount != 0)
				{
					while ($row = $result->fetch_row()) {
						
						if($user->userid != $row[0])
						{
							$user->userid = $row[0];
							$user->firstName = $row[1];
							$user->lastName = $row[2];
							$user->email = $row[3];
							$user->password = $row[4];
							$user->renter_status = $row[5];
							$user->profile_pic_dir = $row[6];
							//echo $row['fname'];
							//$myJSON = json_encode($row);
							//echo $myJSON;
							//array_push($classroom, $row);
							//echo $row["id"];
							//echo $myJSON;
							
							$vehicles = new Vehicle();
							$vehicles->vehicleid = $row[7];
							$vehicles->model = $row[9];
							$vehicles->year = $row[10];
							$vehicles->vin = $row[11];
							$vehicles->miles = $row[12];
							array_push($vehicleList, $vehicles);
						} else {
							$vehicles = new Vehicle();
							$vehicles->vehicleid = $row[7];
							$vehicles->model = $row[9];
							$vehicles->year = $row[10];
							$vehicles->vin = $row[11];
							$vehicles->miles = $row[12];
							array_push($vehicleList, $vehicles);
						}
					}
					break;
				}
				if ($sql_count == 2){
					$row = $result->fetch_row();
					$user->userid = $row[0];
					$user->firstName = $row[1];
					$user->lastName = $row[2];
					$user->email = $row[3];
					$user->password = $row[4];
					$user->renter_status = $row[5];
					$user->profile_pic_dir = $row[6];
					//echo $row['fname'];
					//$myJSON = json_encode($row);
					//echo $myJSON;
					//array_push($classroom, $row);
					//echo $row["id"];
					//echo $myJSON;
					break;
				}
				$result->free();
			}
		} while ($mysqli->next_result());
	}

	$user->vehicles = $vehicleList;
	$myJSON = json_encode($user);
	
	/* close connection */
	$mysqli->close();
	if($user->userid == "") {
		echo 'null';
	} else {
		echo $myJSON;
	}
	} else {
		echo 'null';
	}
?>