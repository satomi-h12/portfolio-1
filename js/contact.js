$(document).ready(function () {
    // start of form
    $("#sendButton").click(function () {
        var name = $("#name");
        var email = $("#eMail");
        var tel = $("#tel");
        var message = $("#message");

        if (name.val() === "" || email.val() === "" || tel.val() === "" || message.val() === "") {
            alert("Please fill out this form");
        } else {
            alert("Thank you for sending the message");
        }
    });
    // end of form
});
