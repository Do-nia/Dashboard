$(document).ready(function () {
    $("form").on("submit", function (evt) {
        var emailValue = $("#email").val();
        // regEmail = /^[a-z]+[-_\.\d]?[a-z][\d]?@[a-z]+\.[a-z]+(\.[a-z]+)*$/gi;
        regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        var passValue = $("#password").val();
        regPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        evt.preventDefault();

        /* check email */
        if (emailValue == "") {
            $("#req").css("display", "block");
        }
        else if (!regEmail.test(emailValue)) {
            $("#err").css("display", "block");
        }
        else {
            $("#err").css("display", "none");
        }
        
        /* check password */
        if (passValue == "") {
            $("#req2").css("display", "block");
        }
        else if (!regPass.test(passValue)) {
            $("#err2").css("display", "block");
        }
        else {
            $("#err2").css("display", "none");
        }

        if (regEmail.test(emailValue) == true && regPass.test(passValue) == true) {
            window.location.href = "index.html";
        }
    })
})