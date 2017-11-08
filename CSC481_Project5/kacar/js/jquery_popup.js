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
    $('.tabs .tab-links li').on('click', function() {
        var $panel = $(this).closest('.tabs');
        $panel.find('.tab-links li.active').removeClass('active');
        $(this).addClass('active');
        //figure out which panel to show
        var panelToShow = $(this).attr('rel');
        //hide current panel
        $panel.find('.tab.active').show(300, showNextPanel);
        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');
            $('#'+panelToShow).hide(300, function() {
                $(this).addClass('active');
            });
        }
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
    $(".tab-content .close_button").click(function() {
        $(this).parent().hide();
        return false;
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
    //Loop through all Labels with class 'editable'.
    $(".editable").each(function () {
        //Reference the Label.
        var label = $(this);
        //Add a TextBox next to the Label.
        label.after("<input type = 'text' style = 'display:none' />");
        //Reference the TextBox.
        var textbox = $(this).next();
 
        //Set the name attribute of the TextBox.
        var id = this.id.split('_')[this.id.split('_').length - 1];
        textbox[0].name = id.replace("lbl", "txt");
 
        //Assign the value of Label to TextBox.
        textbox.val(label.html());
 
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show();
        });
 
        //When focus is lost from TextBox, hide TextBox and show Label.
        textbox.focusout(function () {
            $(this).hide();
            $(this).prev().html($(this).val());
            $(this).prev().show();
        });
    });
});