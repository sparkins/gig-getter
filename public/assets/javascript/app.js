$(document).ready(function () {

    // signUp
    $("#signupform").on("submit", function (event) {
        event.preventDefault();
        var username = $("#username").val().trim();
        var email = $("#email").val().trim();
        var password = $("#pass").val().trim();
        var isbus = $('input[name=bus]:checked').val()
        var data = {
            username: username,
            email: email,
            password: password,
            isbus: isbus
        }
        $.ajax("/signup", {
            type: "POST",
            data: data,
            success: function (responce) {
                document.write(responce);
                document.close();
                //location.reload(responce);
            },
            error: function (error) {

                alert(error.responseText)
            },
        }).then(function (data) {

        })
    })

    // Login 
    $(".loginform").on("submit", function (event) {
        event.preventDefault();
        var email = $("#emaillogin").val().trim();
        var password = $("#passlogin").val().trim();
        var data = {
            email: email,
            password: password
        }
        $.ajax("/signin", {
            type: "POST",
            data: data,
            success: function (responce) {
               // document.open('text/plain');
                document.write(responce)
                //location.reload(responce)
                document.close();
            },
            error: function (error) {
                alert(error.responseText)
            },
        })
    })

    // logout
    $("#logout-icon").on("click", function () {
        $.ajax("/logout", {
            type: "Get",
            success: function (responce) {
              
                document.write(responce)
                location.reload(responce)
            }
        })
    })
})