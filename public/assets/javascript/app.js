$(document).ready(function () {
    $("#signupform").on("submit", function (event) {
    event.preventDefault();      
    var username = $("#username").val().trim();
    var email =  $("#email").val().trim(); 
    var password =  $("#pass").val().trim();
    var isbus = $('input[name=bus]:checked').val()
    var data = {
            username: username ,
            email: email,
            password: password,
            isbus: isbus
            } 
    $.ajax("/signup", {
    type: "POST",
    data: data,
    success: function(responce){
        document.write(responce);
        location.reload(responce); 
    },
    error: function(error) {
       
        alert(error.responseText)
    },
    }).then(function(data){

    })  
    })

     $(".loginform").on("submit", function (event) {
        event.preventDefault();      
        var email =  $("#emaillogin").val().trim(); 
        var password =  $("#passlogin").val().trim();
        var data = {
                email: email,
                password: password
                   }
        $.ajax("/signin", {
        type: "POST",
        data: data,
         success: function(responce){
             document.write(responce)
            location.reload(responce) 
        },
        error: function(error){
            alert(error.responseText)
        },      
         })
        }) 
    })