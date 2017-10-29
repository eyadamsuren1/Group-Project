<?php  
///test/demo_form.php?name1=value1&name2=value2

if(isset($_POST["fName"]))
{
echo $_POST['fName'];
}

	$servername = "localhost";
	$username = "root";
	$password = "root";
	
	class User{
		public $userid = "";
		public $firstName = "";
		Public $lastName = "";
		public $email = "";
		public $password = "";
		public $renter_status = "";
		public $profile_pic_dir="";
		public $vehicles = array();
		
	}
	
	class Vehicle{
		public $vehicleid = "";
		public $model = "";
		public $year = "";
		public $vin = "";
		public $miles = "";

	}
	
	$user = new User();
	$vehicleList = array();
	//$classroom = array();
	
	// Create connection
	$conn = new mysqli($servername, $username, $password);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	//echo "Connected successfully";
	
	
	//$sql = "SELECT * FROM Kacar.user;";
	$sql = "SELECT * FROM Kacar.user INNER JOIN Kacar.Vehicles ON user.userid = Vehicles.ownerid;";
	$result = $conn->query($sql);
	//$user->classrooms = $result;
	if($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			
			if($user->userid != $row['userid'])
			{
				//echo $row['userid'];
				$user->userid = $row['userid'];
				$user->firstName = $row['fname'];
				$user->lastName = $row['lname'];
				$user->email = $row['email'];
				$user->password = $row['password'];
				$user->renter_status = $row['renter_status'];
				$user->profile_pic_dir = $row['profile_pic_dir'];
				//echo $row['fname'];
				//$myJSON = json_encode($row);
				//echo $myJSON;
				//array_push($classroom, $row);
				//echo $row["id"];
				//echo $myJSON;
				
				$vehicles = new Vehicle();
				$vehicles->vehicleid = $row['vehicleid'];
				$vehicles->model = $row['model'];
				$vehicles->year = $row['year'];
				$vehicles->vin = $row['vin'];
				$vehicles->miles = $row['miles'];
				array_push($vehicleList, $vehicles);
				
			} else {
				$vehicles = new Vehicle();
				$vehicles->vehicleid = $row['vehicleid'];
				$vehicles->model = $row['model'];
				$vehicles->year = $row['year'];
				$vehicles->vin = $row['vin'];
				$vehicles->miles = $row['miles'];
				array_push($vehicleList, $vehicles);
			}
			
		}
	}
	
	$user->vehicles = $vehicleList;
	$myJSON = json_encode($user);
	echo $myJSON;
		
?>