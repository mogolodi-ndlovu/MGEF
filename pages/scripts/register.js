function toggleForm(register) {
    if(register) {
        $('#registerForm').show();
        $('#loginForm').hide();
    } else {
        $('#loginForm').show();
        $('#registerForm').hide();
    }
}

$(document).ready(function() {
    $('#registerLink').click(function() {
        toggleForm(true);
    });

    $('#loginLink').click(function() {
        toggleForm(false);
    });
});