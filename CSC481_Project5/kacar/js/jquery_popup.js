$(document).ready(function() {
        $("#sign_up").click(function() {
                $("#signupdiv").css("display", "block");
        });
        $("#signup #cancel").click(function() {
                $(this).parent().parent().hide();
        });

        $("#sign_button").click(function() {
                var first_name = $("#first_name").val();
                var last_name = $("#last_name").val();
                var email_address = $("#email_address").val();
                var password = $("#password").val();
                if (name == "" || email_address == ""){
                        alert("Please Fill All Fields");
                }else{
                        if (validateEmail(email_address)) {
                                $("#signupdiv").css("display", "none");
                        }else {
                                alert('Invalid Email Address');
                        }
                        function validateEmail(email_address) {
                                var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                                if (filter.test(email_address)) {
                                        return true;
                                }else {
                                        return false;
                                }
                        }
                }
        });

        $("#log_in").click(function() {
                $("#logindiv").css("display", "block");
        });
        $("#login #cancel").click(function() {
                $(this).parent().parent().hide();
        });
        $("#login_button").click(function() {
                var name = $("#email_address").val();
                var password = $("#password").val();
                if (email_address == "" || password == ""){
                        alert("Email Address or Password was Wrong");
                }else{
                        $("#logindiv").css("display", "none");
                }
        });

});