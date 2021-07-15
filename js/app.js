// Use the settings object to change the theme
mobiscroll.settings = {
    theme: 'ios'
};

$(function () {
    var isLogin = false;
    $('#demo').on('submit', function (ev) {
        if ($(this).valid()) {
            ev.preventDefault();
            $('#demo-success').mobiscroll('show');
        }
    }).validate({
        errorClass: 'mbsc-err-msg',
        errorPlacement: function (error, element) {
            element.parent().append(error);
        },
        highlight: function (element) {
            $(element).closest('.mbsc-input').addClass("mbsc-err");
        },
        unhighlight: function (element) {
            $(element).closest('.mbsc-input').removeClass("mbsc-err");
        },
        rules: {
            "email": {
                required: true,
                email: true
            },
            "password": {
                required: true,
                minlength: 6
            }
        },
        messages: {
            "email": {
                required: "Email required",
                email: "Invalid email address"
            },
            "password": {
                required: 'Password required',
                minlength: "At least 6 characters required"
            }
        }
    });

    $('.md-signup').on('click', function (ev) {
        ev.preventDefault();
        $('.md-signup-btn').text(isLogin ? 'Sign in' : 'Sign up');
        $(this).text(isLogin ? "Don't have an account yet? Sign up." : "Already have an account?");
        isLogin = !isLogin;
    });

    $('.md-login').on('click', function (ev) {
        ev.preventDefault();
    });

});