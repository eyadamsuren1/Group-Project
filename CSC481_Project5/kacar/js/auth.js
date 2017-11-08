function login() {
    var email = document.getElementById("email_address").value;
	var password = document.getElementById("password").value;

	if(email == "" || password == "") {
        alert("Please Enter Credentials");
	} else {
        $.ajax({
			type: "POST",
			url: "./PHP/loginKacar.php",
			data: {
				"email" : email,
				"password" : password
			},
			success: function(userData) {
                if(userData == 'null')
                {
                    alert("Credentials Incorrect. Try Again");
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
var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};