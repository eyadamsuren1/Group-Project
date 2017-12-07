function SignUp() {
    var fname = document.getElementById("first_name").value;
	var lname = document.getElementById("last_name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("pass").value;
	var phno = document.getElementById("phno").value;
	var address = document.getElementById("address").value;


	if(fname == "" || lname == "" || email == "" || password == "") {
        alert("Please Fill Out The Form Completely!");
	} else {
        $.ajax({
			type: "POST",
			url: "./PHP/CreateAccountPHP.php",
			data: {
				"fname": fname,
            			"lname": lname,
				"email" : email,
				"password" : password,
				"phno" : phno,
				"address" : address,
             			"submit": true
			},
			success: function(userData) {
                if(userData === '')
                {
                    alert("Your Email or Password is incorrect. Try Again!");
                } else {
                    alert("Success");
		    alert(userData);
                    console.log(userData);
                    setCookie("userData", userData);
                    window.location.href = "http://127.0.0.1/BookACar/user/user_index.html";
                    //delete_cookie("userData");
                    //console.log(getCookie("userData"));
                }
			}
		});
	}
}
function successSignUp() {
    
    var json = getCookie("userData");
    console.log(json);
    obj = JSON.parse(json);
    document.getElementById("firstNameAccount").innerHTML = obj.firstName;
    document.getElementById("lastNameAccount").innerHTML = obj.lastName;
    document.getElementById("emailAccount").innerHTML = obj.email;
    alert("Welcome " + obj.firstName);
}

function login() {
    var email = document.getElementById("email_address").value;
	var password = document.getElementById("password").value;
    if(email == "" || password == "") {
        alert("Please Fill Out The Form Completely!");
    }
    /*
	if(email == "") {
        document.getElementById('error').innerHTML="<p>Email is required!</p>";
        return false;
	}
    if(password == "") {
        document.getElementById('error').innerHTML+="<p>Password is required!</p>";
        return false;
    } 
    */
    else {
        $.ajax({
			type: "POST",
			url: "./PHP/loginKacar.php",
			data: {
				"email" : email,
				"password" : password
			},
			success: function(userData) {
                if(userData == 'null' || userData.includes('</br>'))
                {
                    alert("Your Email or Password is incorrect. Try Again!");
                } else {
                    alert("Success");
                    console.log(userData);
                    setCookie("userData", userData);
                    window.location.href = "http://127.0.0.1/BookACar/user/user_index.html";
                    //delete_cookie("userData");
                    //console.log(getCookie("userData"));
                }
			}
		});
	}
}
function successLogin() {
    
    var json = getCookie("userData");
    console.log(json);
    obj = JSON.parse(json);
    document.getElementById("firstNameAccount").innerHTML = obj.firstName;
    document.getElementById("lastNameAccount").innerHTML = obj.lastName;
    document.getElementById("emailAccount").innerHTML = obj.email;
    document.getElementById("phoneNumberAccount").innerHTML = obj.phone_number;
    document.getElementById("addressAccount").innerHTML = obj.address;
    loadVehicles();
    alert("Welcome " + obj.firstName);
}
function signOut() {
    var json = getCookie("userData");
    obj = JSON.parse(json);
    alert("Goodbye " + obj.firstName);
    delete_cookie("userData");
    delete_cookie("vehicleData");
    window.location.href = "http://127.0.0.1/BookACar/index.html";
}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var username = getCookie("userData");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        
    }
}

function loadVehicles(param) {
    //var email = document.getElementById("email_address").value;
    //var password = document.getElementById("password").value;
    
    var path = "";

    if(param == 'unlogged') {
        path = "./PHP/loadVehicles.php"
    } else {
        path = "./../PHP/loadVehicles.php"
    }

        $.ajax({
			type: "POST",
			url: path, 
			data: {
				//"email" : email,
				//"password" : password
			},
			success: function(vehicleData) {
                if(vehicleData == 'null' || vehicleData.includes('</br>'))
                {
                    alert("Could Not Load Vehicles");
                } else {
                    alert("Success");
                    console.log(vehicleData);
                    setCookie("vehicleData", vehicleData);
                    //window.location.href = "http://127.0.0.1/BookACar/user/user_index.html";
                    //delete_cookie("userData");
                    //console.log(getCookie("userData"));
                }
			}
        });
        
        var json = getCookie("vehicleData");    //string JSON
        //alert(json);
        obj = JSON.parse(json);     //Array of unique Vehicles
        var price = "";
        //document.getElementById("photo1").src = "./img/1/mustang1.png";
        var i;
        for (i = 0; i < obj.length; i++) {
            var temp = obj[i].picdir; 
            
            var id = "box_" + (i+1);
            var currentElement = document.getElementById(id);
            currentElement.style.display = "block";
            var j;
            for(j = 0; j < temp.length; j++)
            {
                var img = document.createElement("img");
                img.setAttribute("class", "photo");
                
                if(document.getElementById("unlogged"))
                {
                    img.setAttribute("photoboxsrc", temp[j]);
                    img.setAttribute("src", temp[j]);
                } else {
                    img.setAttribute("photoboxsrc", "./." + temp[j]);
                    img.setAttribute("src", "./." + temp[j]);
                }
                
                if(j == 0)
                {
                    //img.setAttribute("style", "display:block");
                }else{
                    img.setAttribute("style", "display:none");
                }
                
                currentElement.appendChild(img);
            }
            var div = document.createElement("div");
            div.setAttribute("class", "description");
            var p = document.createElement("p");
            p.setAttribute("class", "description_content");
            p.innerHTML = "$" + obj[i].price + " Per Day";
            currentElement.appendChild(div);
            div.appendChild(p);
        }

        //document.createAttribute("photoboxsrc").value = temp[0];
        //document.getElementById("samplePic").src = temp[0];
        //alert(temp[0]);

}

var delete_cookie = function(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function uploadVehicle(){
    var json = getCookie("userData");
    console.log(json);
    obj = JSON.parse(json);
    var userID=obj.userid;
    var vintage = document.getElementById("CarVinNumberAccount").value;
    var model = document.getElementById("CarModelAccount").value;
    var year = document.getElementById("CarYearAccount").value;
    var miles = document.getElementById("CarMilesAccount").value;
    var make = document.getElementById("CarMakeAccount").value;
    var price = document.getElementById("CarPriceAccount").value;
    var startDate=document.getElementById("CarFromDateAccount").value;
    var endDate=document.getElementById("CarToDateAccount").value;
    var path="./../PHP/upload.php";
    if(vintage == "" || model == ""|| year == ""|| miles == ""||make==""||price=="") {
        alert("Please Fill Out The Form Completely!");
    } else {
        $.ajax({
            type: "POST",
            url: path,
            data: {
                "make" : make,
                "model" : model,
                "vintage" : vintage,
                "miles" : miles,
                "year" : year,
                "ownerid" : userID,
                "price" : price,
                "startDate" : startDate,
                "endDate" : endDate
            },
            success: function(vehicleData) {
                if(vehicleData== 'null' || vehicleData.includes('</br>'))
                {
                    alert("Your Email or Password is incorrect. Try Again!");
                } else {
                    alert("Success");
                    console.log(vehicleData);
                    setCookie("vehicleData", vehicleData);
                    //window.location.href = "http://127.0.0.1/BookACar/user/user_index.html";
                    //delete_cookie("userData");
                    //console.log(getCookie("userData"));
                }
            }
        });
    }
    document.getElementById("upload").reset();
};
