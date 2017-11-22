$(document).ready(function() {

    function myMap() {
        var myCenter = new google.maps.LatLng(51.508742,-0.120850);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 5};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        // Zoom to 9 when clicking on marker
        google.maps.event.addListener(marker,'click',function() {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
        });
    }

    $("#sign_up").click(function() {
        $("#signupdiv").css("display", "block");
    });
    $("#signup #cancel").click(function() {
        $(this).parent().parent().hide();
    });
    $('#error').show(1).delay(3000).hide(1);
    /*
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
    */
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
    $("#accountdiv .close_button").click(function() {
		$("#accountdiv").hide();
		return false;
    });
    $(".photobox img").PhotoBox({
        rightWidth: 360,
        leftBgColor: "black",
        rightBgColor: "white",
        overlayBgColor: "#222",
        containerClassName: 'photobox',
        imageClassName: 'photo',
            
        onImageShow: function() {
            
            var path = $(this).attr("src");
            //alert(paths);
            var id = path.split("/")[5];
            var json = getCookie("vehicleData");    //string JSON
            //alert(json);
            obj = JSON.parse(json);     //Array of unique Vehicles
            //console.log(json);
            var make = "";
            var model = "";
            var year = "";
            var miles = "";
            var vin = "";

            for (i = 0; i < obj.length; i++) {
                var vehicleID = obj[i].vehicleid;

                if(vehicleID == id)
                {
                    make = obj[i].make;
                    model = obj[i].model;
                    year = obj[i].year;
                    miles = obj[i].miles;
                    vin = obj[i].vin;
                }
            }

            $(".photobox-image-content").html(
                ("<b>Make: </b>" + make)+
            	("<br><b>Model: </b>" + model)+
            	("<br><b>Year: </b>" + year)+
            	("<br><b>Miles: </b>" + miles)+
            	("<br><b>Vin Number: </b>" + vin));
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

    /*Closing Popup on ESC keypress*/
    /*
	$(document).keyup(function(ev){
	    if(ev.keyCode == 27)
	        $("#logindiv").trigger("#cancel");
	});

    $(document).bind('keydown', function(e) {
        if (e.which == 27) {
            alert('esc pressed');
        }
    });
        $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            window.close();
            alert("esc pressed");
        }
    });
    */

    // Upload Form
    // Settings ////////////////////////////////////////////////
    var uploader = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight', // Set runtimes, here it will use HTML5, if not supported will use flash, etc.
        browse_button : 'pickfiles', // The id on the select files button
        multi_selection: false, // Allow to select one file each time
        container : 'uploader', // The id of the upload form container
        max_file_size : '800kb', // Maximum file size allowed
        url : '../PHP/upload.php', // The url to the upload.php file
        flash_swf_url : 'plupload.flash.swf', // The url to thye flash file
        silverlight_xap_url : 'plupload.silverlight.xap', // The url to the silverlight file
        filters : [ {title : "Image files", extensions : "jpg,gif,png"} ] // Filter the files that will be showed on the select files window
    });
    // RUNTIME
    uploader.bind('Init', function(up, params) {
        $('#runtime').text(params.runtime);
    });
    // Start Upload ////////////////////////////////////////////
    // When the button with the id "#uploadfiles" is clicked the upload will start
    $('#uploadfiles').click(function(e) {
        uploader.start();
        e.preventDefault();
    });
    uploader.init(); // Initializes the Uploader instance and adds internal event listeners.
    // Selected Files //////////////////////////////////////////
    // When the user select a file it wiil append one div with the class "addedFile" and a unique id to the "#filelist" div.
    // This appended div will contain the file name and a remove button
    uploader.bind('FilesAdded', function(up, files) {
        $.each(files, function(i, file) {
            $('#filelist').append('<div class="addedFile" id="' + file.id + '">' + file.name + '<a href="#" id="' + file.id + '" class="removeFile"></a>' + '</div>');
        });
        up.refresh(); // Reposition Flash/Silverlight
    });
    // Error Alert /////////////////////////////////////////////
    // If an error occurs an alert window will popup with the error code and error message.
    // Ex: when a user adds a file with now allowed extension
    uploader.bind('Error', function(up, err) {
        alert("Error: " + err.code + ", Message: " + err.message + (err.file ? ", File: " + err.file.name : "") + "");
        up.refresh(); // Reposition Flash/Silverlight
    });
    // Remove file button //////////////////////////////////////
    // On click remove the file from the queue
    $('a.removeFile').live('click', function(e) {
        uploader.removeFile(uploader.getFile(this.id));
        $('#'+this.id).remove();
        e.preventDefault();
    });
    // Progress bar ////////////////////////////////////////////
    // Add the progress bar when the upload starts
    // Append the tooltip with the current percentage
    uploader.bind('UploadProgress', function(up, file) {
        var progressBarValue = up.total.percent;
        $('#progressbar').fadeIn().progressbar({
            value: progressBarValue
        });
        $('#progressbar .ui-progressbar-value').html('<span class="progressTooltip">' + up.total.percent + '%</span>');
    });
    // Close window ////////////////////////////////////////////
    // When the close button is clicked close the window
    $('.upload-form .close').on('click', function(e) {
        $('.upload-form').fadeOut('slow');
        e.preventDefault();
    }); // end of the upload form configuration
    $("#profileImage").click(function(e) {
        $("#imageUpload").click();
    });
    $(".middle").click(function(e) {
        $("#imageUpload").click();
    });

    function fasterPreview( uploader ) {
        if ( uploader.files && uploader.files[0] ){
              $('#profileImage').attr('src', 
                 window.URL.createObjectURL(uploader.files[0]));
        }
    }
    $("#imageUpload").change(function(){
        fasterPreview( this );
    });
});