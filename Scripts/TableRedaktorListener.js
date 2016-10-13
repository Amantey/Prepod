$(document).ready(function () {

    $("#SettingsTableRedaktor li").click(function () {
        if ($(this).hasClass("active")) {

        } else {
            $("#SettingsTableRedaktor li").removeClass("active");
            $(this).addClass("active");
        }
    });

});