$(document).ready(function () {
    //скрывает расписание при нажатии на область
    $(".dayOnClick").on('click', function () {
        $("#timetable").addClass("table-hide");

        $("#detailTable").removeClass("table-hide");
       
        var classList = $(this).attr('class').split(/\s+/);
        $.each(classList, function (index, item) {
            if (item != 'dayOnClick') {
                $("#imageCenterDetailTable").attr("src", "/Images/"+ item +".png");
            }
        });
    });

    $("#back-on-table").on("click", function () {
        $("#timetable").removeClass("table-hide");
           
        $("#detailTable").addClass("table-hide");
    });

    $("#SettingsMenu li").removeClass("active");
    $("#SettingsMenu li:nth-child(1)").addClass("active");
});