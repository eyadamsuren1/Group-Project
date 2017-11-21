<?php  
///test/demo_form.php?name1=value1&name2=value2
//echo 'hello';

	//echo $_POST['email'];
	//echo $_POST['password'];
	$servername = "localhost";
	$username = "root";
	$password = "root";
	

	
	class Vehicle{
		public $vehicleid = "";
		public $make = "";
		public $model = "";
		public $year = "";
		public $vin = "";
		public $miles = "";
		public $price = "";
		public $picdir = array();
	}
	
	class PicDir{
		
		//public $vehicleid = "";
		public $dir = array();
	}
		
		
	
	$vehicleList = array();
	$picdir = new PicDir();
	$mysqli = new mysqli("localhost", "root", "root", "kacar");

	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}

	//$query  = "SELECT * FROM class;";
	//$query = "SELECT * FROM user";
	
	//$sql = "";
	//$sql = "SELECT * FROM Vehicles LIMIT 0, 10;";
	$sql = "SELECT * FROM Vehicles;";
	$sql .= "SELECT * FROM pic_dir;";
	
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
					//echo $rowcount;
				if($sql_count == 1 && $rowcount != 0)
				{
					while ($row = $result->fetch_row()) {
						
						
							$vehicle = new Vehicle();
							$vehicle->vehicleid = $row[0];
							$vehicle->make = $row[2];
							$vehicle->model = $row[3];
							$vehicle->year = $row[4];
							$vehicle->vin = $row[5];
							$vehicle->miles = $row[6];
							$vehicle->price = $row[7];
							//echo $row['fname'];
							//$myJSON = json_encode($row);
							//echo $myJSON;
							//array_push($classroom, $row);
							//echo $row["id"];
							//echo $myJSON;
							//$dir = new PicDir();
							//$vehicle->picdir = $dir;
							array_push($vehicleList, $vehicle);
							
							
						
					}
					
				    //echo $myJSON;
					//break;
				}
				if ($sql_count == 2){
					
					$arrlength = count($vehicleList);
					while($row = $result->fetch_row())
					{
						for($x = 0; $x < $arrlength; $x++)
						{
							$currentid = $vehicleList[$x]->vehicleid;

							if($currentid == $row[0])
							{
								//echo "\n" .$currentid;
								//echo $row[1];
								array_push($vehicleList[$x]->picdir, $row[1]);

								//$vehicleList[$x]->picdir
							}

						}
					
					}
					$myJSON = json_encode($vehicleList);
					echo $myJSON;
					break;
				}
				
				
				
				
				$result->free();
			}
			
		} while ($mysqli->next_result());
	}

	
	
	
	/* close connection */
	$mysqli->close();
	//if($user->userid == "") {
		//echo 'null';
	//} else {
		//echo $myJSON;
	//}

			
?>
