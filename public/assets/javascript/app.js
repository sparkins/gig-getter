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
            success: function (response) {
                document.write(response);
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
            success: function (response) {
               // document.open('text/plain');
                document.write(response)
                //location.reload(response)
                document.close();
            },
            error: function (error) {
                alert(error.responseText)
            },
        })
    })

    // logout
    $("#logoutlink").on("click", function () {
        console.log('alert');
        $.ajax("/logout", {
            type: "Get",
            success: function (response) {
              
                document.write(response)
                document.close();
                // location.reload(response)
            }
        })
    })

    // Create a Review Page - user-review.handlebars
    // $("#ursubmit").on("click", function () {
    //     console.log('Review has been submitted');
    //     //     type: "Post",
    //     // })
    // })
})