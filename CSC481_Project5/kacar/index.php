<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Book-A-Car | Welcome</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
<!--
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
-->
    <link href="./css/photobox.css" rel="stylesheet" type="text/css"/>
    <script src="./js/photobox.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="js/jquery_popup.js"></script>
    <script src="js/authentication.js"></script>
  </head>
  <body id="unlogged"onload="loadVehicles('unlogged')">
    <header>
      <div class="container">
        <div id="branding">
          <img src="./img/icons/RentACarLogo.gif" width="70" height="70"/>
        </div>
        <p id="sign_up">Sign Up</p>
        <p id="log_in">Log In</p>
        <div id="logindiv">
          <form action="#" id="login">
            <h4>LOGIN</h4>
            <!--<div id="error"></div>-->
            <input type="text" id="email_address" placeholder="Email">
            <input type="password" id="password" placeholder="Password">
            <input type="button" id="login_button" value="Login" onclick = "login()">
            <input type="button" id="cancel" value="Cancel">
          </form>
        </div>
	 <div id="signupdiv">
          <form action="#" id="signup">
          <h4>SIGN UP</h4>
            <input type="text" id="first_name" placeholder="First Name">
            <input type="text" id="last_name" placeholder="Last Name">
            <input type="text" id="email" placeholder="Email">
            <input type="password" id="pass" placeholder="Password">
            <input type="text" id="phno" placeholder="Phone Number">
            <input type="text" id="address" placeholder="Address">
            <input type="button" id="sign_button" value="Signup" onclick="SignUp()">
            <input type="button" id="cancel" value="Cancel">
          </form>
        </div>
        <div class="logo_name">KACAR</div>
        <div id='cssmenu'>
          <ul>
             <li class='current'><a href='#'><span>Home</span></a></li>
             <li><a href='services.html'><span>Services</span></a></li>
             <li><a href='about.html'><span>About</span></a></li>
          </ul>
        </div>
      </div>
    </header>

    <section id="showcase">
      	<div class="container">
        	<h1>Affordable Professional Car Rental</h1>
           	<p>The best person to person car rental service on the web!</p>
      	</div>
    </section>
    <div class="main-container">
      <section id="search">
        <div class="search-box-wrapper">
            <input type="text" name="search" placeholder="Search..." class="search-box-input">
            <button class="search-box-button">&#128269;</button>

            <ul class="list-group" id="result"></ul>
            <br />
        </div>
  	    <table class="btn-group">
  	        <tr>
  	        	<td class="show_1 active myClick">Recommendation</td>
  	        	<td class="show_2 myClick">Latest Available Deals</td>
  	        	<td class="show_3 myClick">Affordable Deals</td>
  	        </tr>
  	    </table>
      </section>
    	<table class="main_table">
    	    <tbody>
    	        <tr>
    	        	<td>
              		<div class="photobox" id="box_1" style="display:none">
                  <!--
      							<img class="photo" photobox-src="./img/1/P1020034.jpg" src="./img/1/P1020034.jpg"/>
      							<img class="photo" photobox-src="./img/1/P1020035.jpg" src="./img/1/P1020035.jpg" style="display: none"/>
      							<img class="photo" photobox-src="./img/1/P1020036.jpg" src="./img/1/P1020036.jpg" style="display: none"/>
      							<img class="photo" photobox-src="./img/1/P1020037.jpg" src="./img/1/P1020037.jpg" style="display: none"/>
      							<img class="photo" photobox-src="./img/1/P1020038.jpg" src="./img/1/P1020038.jpg" style="display: none"/>
      							<img class="photo" photobox-src="./img/1/P1020039.jpg" src="./img/1/P1020039.jpg" style="display: none"/>
      							<div class='description'>
      								<p class='description_content'>$30 per Day</p>
      							</div>
						      -->
    	        		</div>
    	        	</td>
    	        	<td>
                  		<div class="photobox" id="box_2" style="display:none"></div>
    	        	</td>
    	        </tr>
    	        <tr>
    	        	<td>
                  		<div class="photobox" id="box_3" style="display:none"></div>
    	        	</td>
    	        	<td>
                  		<div class="photobox" id="box_4" style="display:none"></div>
    	        	</td>
    	        </tr>
    	        <tr>
    	        	<td>
                  		<div class="photobox" id="box_5" style="display:none"></div>
    	        	</td>
    	        	<td>
                  		<div class="photobox" id="box_6" style="display:none"></div>
    	        	</td>
    	        </tr>
    	    </tbody>
    	</table>
    </div>
    <footer>
      <p>Book-A-Car ~ Copyright &copy; 2017</p>
      <p><a href="#">Your Site</a> &#124; <a href="#">Terms of Use</a> &#124; <a href="#">Privacy Policy</a> &#124; <a href="#">Help</a></p>
    </footer>
    <script>
      // Call geocode
      geocode();

      var latitude = "";
      var longitude = "";
      function geocode(){
        var location = "1325 4th Ave, Los Angeles, CA 90019";
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
          params:{
            address:location,
            key:'AIzaSyD4lf3dLDOuqsvBEreeQsOchv6XqtX_3t4'
          }
        })
        .then(function(response){
          // Geometry
          latitude = response.data.results[0].geometry.location.lat;
          longitude = response.data.results[0].geometry.location.lng;
          console.log(latitude);
          console.log(longitude);
          /*
          var geometryOutput = `
            <ul class="list-group">
              <li class="list-group-item"><strong>Latitude</strong>: ${latitude}</li>
              <li class="list-group-item"><strong>Longitude</strong>: ${longitude}</li>
            </ul>
          `;
          document.getElementById('geometry').innerHTML = geometryOutput;
          */
        })
        .catch(function(error){
          console.log(error);
        });
      }
      function initMap() {
        var options = {
          zoom:13,
          //center: {lat: latitude, lng: longitude}
          center: {lat: 37.090, lng: -95.712}
        }
        // Create the map.
        var map = new google.maps.Map(document.getElementById('map'), options);
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4lf3dLDOuqsvBEreeQsOchv6XqtX_3t4&callback=initMap">
    </script>


    <!--Search Filter button function-->
    <script>
    $(document).ready(function(){
     $.ajaxSetup({ cache: false });
     $('.search-box-input').keyup(function(){
      $('#result').html('');
      $('#state').val('');
      var searchField = $('.search-box-input').val();
      var expression = new RegExp(searchField, "i");
      $.getJSON('data.json', function(data) {
       $.each(data, function(key, value){
        if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
        {
         $('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
        }
       });
      });
     });

     $('#result').on('click', 'li', function() {
      var click_text = $(this).text().split('|');
      $('.search-box-input').val($.trim(click_text[0]));
      $("#result").html('');
     });
    });
    </script>
  </body>
</html>
