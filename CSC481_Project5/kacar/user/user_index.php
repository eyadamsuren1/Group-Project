<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,follow" />
    <title>Book-A-Car | User</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
    <link href="../css/photobox.css" rel="stylesheet" type="text/css"/>
    <script src="../js/user_photobox.js"></script>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/jquery_popup.js"></script>
    <script src="../js/authentication.js"></script>

    <script src="../js/plupload.full.js"></script>
    <script src="../js/jquery-progressbar.min.js"></script>

  </head>
  <body id="logged" onload="successLogin('logged')">
    <header>
      <div class="container">
        <div id="branding">
          <img src="../img/icons/RentACarLogo.gif" width="70" height="70"/>
        </div>
        <p id="sign_out" onClick="signOut()">Sign Out</p>
        <p id="account_info">Account</p>

        <div id="accountdiv">
          <div class="tabs">
            <ul class="tab-links">
              <li rel="panel_1" class="active">Booker</a></li>
              <li rel="panel_2">Renter</a></li>
            </ul>

            <div class="tab-content">
              <div id="panel_1" class="tab active">
                <form action="#">
                    <h4>Account Information</h4>
                    <div class="account_info">
              <div class="tag"><div class="inner"><p><b>First Name: </b></p></div><div class="inner-line"><p id="firstNameAccount" contenteditable="true"></p></div></div>
              <div class="tag"><div class="inner"><p><b>Last Name: </b></p></div><div class="inner-line"><p id="lastNameAccount" contenteditable="true"></p></div></div>
              <div class="tag"><div class="inner"><p><b>Email Address: </b></p></div><div class="inner-line"><p id="emailAccount" contenteditable="true"></p></div></div>
              <div class="tag"><div class="inner"><p><b>Phone Number: </b></p></div><div class="inner-line"><p id="phoneNumberAccount" contenteditable="true"></p></div></div>
              <div class="tag"><div class="inner"><p><b>Address: </b></p></div><div class="inner-line"><p id="addressAccount" contenteditable="true"></p></div></div>
                    </div>
                    <div class="side-booker-division">
                      <div id="profile-container">
                        <image id="profileImage" src="../img/icons/profile_picture.png" />
                          <div class="middle">UPDATE</div>
                      </div>
                      <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" required="" capture>
                      <button class='close_button'>Close</button>
                      <button class='panel_1_button'>Update</button>
                    </div>
                </form>
              </div>
              <div id="panel_2" class="tab">
                <form action="#" id="upload">
                  <h4>Vehicle Information</h4>
                  <div class="vehicle_info">
                      <p>Make: &nbsp;</p><input type="text" id="CarMakeAccount" placeholder="Make"><br>
                      <p>Model: &nbsp;</p><input type="text" id="CarModelAccount" placeholder="Model"><br>
                      <p>Year: &nbsp;</p><input type="text" id="CarYearAccount" placeholder="Year"><br>
                      <p>Vin Number: &nbsp;</p><input type="text" id="CarVinNumberAccount" placeholder="Vin Number"><br>
                      <p>Miles: &nbsp;</p><input type="text" id="CarMilesAccount" placeholder="Miles"><br>
                      <p>Price: &nbsp;</p><input type="text" id="CarPriceAccount" placeholder="Price"><br>
                    </div>
                    <div class="side-renter-division">
                      <div class="availability_div">
                        <h4>Availability</h4>
                        <p>From: &nbsp;</p><input type="date" id="CarFromDateAccount"><br>
                        <p>To: &nbsp;</p><input type="date" id="CarToDateAccount"><br>
                      </div>
                      <div class="upload-form" id="uploader">
                        <!-- Select & Upload Button -->
                        <div>
                          <a class="button" id="pickfiles" href="#">Choose File</a>
                          <!-- id="uploadfiles" ***Upload*** -->
                        </div>
                        <!-- File List -->
                        <div id="filelist" class="cb"></div>
                        <!-- Progress Bar -->
                        <div id="progressbar"></div>
                      </div>
                      <button class='close_button'>Close</button>
                      <button class='panel_2_button' id="uploadfiles" onclick="uploadVehicle()">Upload</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="logo_name">KACAR</div>
        <div id='cssmenu'>
          <ul>
             <li class='current'><a href='#'><span>Home</span></a></li>
             <li><a href='user_services.html'><span>Services</span></a></li>
             <li><a href='user_about.html'><span>About</span></a></li>
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
            <input type="text" placeholder="Search..." class="search-box-input">
            <button class="search-box-button">&#128269;</button>
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
                  </div>
                </td>
                <td>
                  <div class="photobox" id="box_2" style="display:none">
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="photobox" id="box_3" style="display:none">
                  </div>
                </td>
                <td>
                  <div class="photobox" id="box_4" style="display:none">
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="photobox" id="box_5" style="display:none">
                  </div>
                </td>
                <td>
                  <div class="photobox" id="box_6" style="display:none">
                  </div>
                </td>
              </tr>
          </tbody>
      </table>
    </div>
    <style>
    /*Booking Information*/
    .booking_form_overlay {
      position: fixed;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background: rgb(54, 25, 25);
      background: rgba(5, 5, 5, .85);
      display: none;
      z-index: 9999;
    }
    .booking_form_overlay .form_wrap {
      width: 50%;
      height: 350px;
      margin: 0px;
      padding: 20px;
      background-color: white;
      border-radius: 3px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .display_now1_div {
      float: left;
      width: 50%;
      height: 100%;
    }
    .display_now2_div {
      float: right;
      width: 50%;
      height: 100%;
    }
    .book_now_div {
      margin: 0 auto;
      text-align: center;
      width: 70%;
      border-radius: 3px;
      border: 1px dashed black;
      background: #d6d6d6;
      padding: 10px 10px 10px 10px;
    }
    .book_now_div h4 {
      font-size: 15px;
      margin: 0px;
      padding: 5px;
    }
    .book_now_div p {
      font-weight: bold;
      font-size: 14px;
      display: inline-block;
      width: 45px;
      text-align: right;
      margin: 0px;
    }
    .form_wrap h1 {
      text-align: center;
      margin: 0px;
      margin-bottom: 20px;
    }
    .pay_with_button {
      float: right;
      width: 23%;
      bottom: 0px;
      right: 20%;
      position: absolute;
    }
    .pay_with_button image {
      width: 100%;
    }
    .pay_with_button:hover {
      opacity: 0.60;
    }
    .close_book_button {
      padding-right: 10px;
      float: right;
      background-color: #bcbcbc;
      border: 1px solid #444444;
      border-radius: 3px;
      font-weight: bold;
      line-height: 30px;
      font-size: 14px;
      width: 15%;
      bottom: 0px;
      right: 0px;
      position: absolute;
    }
    .close_book_button:hover {
      background: #ff0000;
    }
    .pay_with_button, .close_book_button {
      margin-bottom: 20px;
      display: inline-block;
    }
    .close_book_button {
      margin-right: 20px;
    }
    .book_now_div input {
      border-radius: 5px;
      background: #ededed;
      padding: 5px;
      margin-left: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .display_now1_div p {
      font-size: 20px;
      display: inline;
    }
    .go_right {
      padding-left: 25px;
    }
    .check_out p {
      display: inline;
    }
    </style>
    <div id="booking_form" class='booking_form_overlay'>
      <div class="form_wrap">
        <h1>Booking Form</h1>

        <div class="display_now1_div">
          <b><p class="go_right">Make: </p></b><p id="makeClicked"></p><br>
          <b><p class="go_right">Model: </p></b><p id="modelClicked"></p><br>
          <b><p class="go_right">From: </p></b><p id="fromClicked"></p><br>
          <b><p class="go_right">To: </p></b><p id="toClicked"></p><br>
          <b><p class="go_right">Price: </p></b><p id="priceClicked"></p><p>$</p><br>
        </div>
        <div class="display_now2_div">
          <div class="book_now_div">
            <h4>Book Now!</h4>
            <p>From: </p><input type="date" id="UserFromDateAccount" class="datepicker"><br>
            <p>To: </p><input type="date" id="UserToDateAccount" class="datepicker"><br>
            <div class="check_out">
              <hr>
              <b><p>Total Days: </p></b><p id="totalDays"></p><br>
              <b><p>Total Price: </p></b><p id="totalPrice"></p><br>
              <button onclick="calendar()">Calculate</button>
              <input type="button" id="book_button" value="book" onclick="BookACar()">
            </div>
          </div>
          <button class='close_book_button'>Cancel</button>
          <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="ZPJF4UA8DESYG">
            <input type="image" class="pay_with_button" src="http://www.dermitech.com/image/PayPal-PayNow-Button.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          </form>
        </div>
      </div>
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
