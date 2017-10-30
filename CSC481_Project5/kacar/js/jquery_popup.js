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
    /*
    $("#login_button").click(function() {
        var name = $("#email_address").val();
        var password = $("#password").val();
        if (email_address == "" || password == ""){
            alert("Email Address or Password was Wrong");
        }else{
            $("#logindiv").css("display", "none");
        }
    });
    */
    $("#account_info").click(function() {
        $("#accountdiv").css("display", "block");
    });
    $("#account #cancel").click(function() {
        $(this).parent().parent().hide();
    });
    /*
    $("#login_button").click(function() {
        var name = $("#email_address").val();
        var password = $("#password").val();
        if (email_address == "" || password == ""){
            alert("Email Address or Password was Wrong");
        }else{
            $("#accountdiv").css("display", "none");
        }
    });
    */
    $(".photobox img").PhotoBox({
        rightWidth: 360,
        leftBgColor: "black",
        rightBgColor: "white",
        overlayBgColor: "#222",
        containerClassName: 'photobox',
        imageClassName: 'photo',
            
        onImageShow: function() {
            $(".photobox-image-content").html($(this).attr("alt"));
        }           
    });
    // Click Activator
    $('.btn-group td').click(function(){
        $('.btn-group td').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
    });
    $(".show_1").on('click', function() {
        $("#box_1").slideDown(2000);
        $("#box_2").slideDown(2000);
        $("#box_3").slideDown(2000);
        $("#box_4").slideDown(2000);
        $("#box_5").slideDown(2000);
        $("#box_6").slideDown(2000);
    });
    $(".show_2").on('click', function() {
        $("#box_1").slideDown(2000);
        $("#box_2").slideDown(2000);
        $("#box_5").slideDown(2000);
        $("#box_6").slideUp(2000);
        $("#box_3").slideUp(2000);
        $("#box_4").slideUp(2000);
    });
    $(".show_3").on('click', function() {
        $("#box_1").slideUp(2000);
        $("#box_2").slideUp(2000);
        $("#box_3").slideDown(2000);
        $("#box_4").slideDown(2000);
        $("#box_5").slideDown(2000);
        $("#box_6").slideDown(2000);
    });
	$('.myLink').click(function () {
	    $('html, body').animate({
	        scrollTop: $(document).height()
	    }, 'slow');
	    return false;
	});
});