function SignUp() {
    var fname = document.getElementById("first_name").value;
	var lname = document.getElementById("last_name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("pass").value;


	if(fname == "" || lname == "" || email == "" || password == "") {
        alert("Please Fill Out The Form Completely!");
	} else {
        $.ajax({
			type: "POST",
			url: "./PHP/CreateAccountPHP.php",
			data: {
				"email" : email,
				"password" : password
			},
			success: function(userData) {
                if(userData == 'null'|| userData.includes('</br>'))
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
	} else {
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
    alert("Welcome " + obj.firstName);
}
function signOut() {
    var json = getCookie("userData");
    obj = JSON.parse(json);
    alert("Goodbye " + obj.firstName);
    delete_cookie("userData");
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

function loadVehicles()
{
    //var email = document.getElementById("email_address").value;
	//var password = document.getElementById("password").value;

        $.ajax({
			type: "POST",
			url: "./PHP/loadVehicles.php",
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
        
        var json = getCookie("vehicleData");
        obj = JSON.parse(json);
        var temp = obj[0].picdir;
        document.getElementById("samplePic").src = temp[0];
        document.getElementById('samplePic').photoboxsrc = temp[0];
        alert(temp[0]);

	
}

var delete_cookie = function(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
