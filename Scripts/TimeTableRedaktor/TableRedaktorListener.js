$(document).ready(function () {
    var currentRow = -1;
    var currentTable = '';
    var GroupTR = 0;
    $("#TimeTableRedaktorPart1 td").click(function () {

        currentRow = $(this).parent('tr').index();
        currentTable = 'TimeTableRedaktorPart1';
        GroupTR = Math.floor(currentRow / 2) + 1;
        
    });

    $('#modal-subject').on('hidden.bs.modal', function () {

        $("#TypeOfOccupation :nth-child(1)").prop('selected', true);
        $("#nameSubject").val('');
        $("#NumberAuditory").val('');
    });

    $("#modal-subject #AddSubject").click(function () {

        var TypeWeek = $("#TypeWeek :selected").text();
        
        
        var NeedTR = '';
        if (TypeWeek != 'Нижняя' ) {
            NeedTR = GroupTR * 2 - 1;
            
        } else {
            NeedTR = GroupTR * 2;
        }
        
        if (TypeWeek == 'Верхняя') {
            
            $("#" + currentTable + " tr:eq(" + (NeedTR + 1) + ") td.botweek").show();
        } else if (TypeWeek == 'Нижняя') {
            $("#" + currentTable + " tr:eq(" + (NeedTR) + ") td.botweek").show();
        } else {
            $("#" + currentTable + " tr:eq(" + (NeedTR) + ") td.botweek").hide().html('');
            $("#" + currentTable + " tr:eq(" + (NeedTR + 1) + ") td.botweek").hide().html('');
        }

        var content = '';

        content += $("#nameSubject").val();
        if (content != '') {

            if ($("#NumberAuditory").val() != '') {
                content += ' ауд. ' + $("#NumberAuditory").val();
            }

            $("#" + currentTable + " tr:eq(" + NeedTR + ") td.TypeClass").html($("#TypeOfOccupation").val());
        } else {
            $("#" + currentTable + " tr:eq(" + NeedTR + ") td.TypeClass").html('');
        }
        $("#" + currentTable + " tr:eq(" + NeedTR + ") td.SubjectName").html(content);
        
    });

    $("#modal-subject #ClearSubject").click(function () {
        $("#TypeOfOccupation :nth-child(1)").prop('selected', true);
        
        $("#nameSubject").val('');
        $("#NumberAuditory").val('');
    });

    $('#modal-subject').on('show.bs.modal', function () {

        var content = $("#" + currentTable + " tr:nth-child(" + (currentRow + 1) + ") td.SubjectName").html();
        var splitContent = content.split(' ');

        $("#nameSubject").val(splitContent[0]);
       
        var j = 0;
        for (var index = 0; index < splitContent.length; index++) {

            if (splitContent[index] == 'ауд.') {
                $("#NumberAuditory").val(splitContent[index + 1]);
                break;
            }

        }

        var typeOccupation = $("#" + currentTable + " tr:nth-child(" + (currentRow + 1) + ") td.TypeClass").html();
        
        $('#TypeOfOccupation option').each(function () {
            if ($(this).text() == typeOccupation) {
                $(this).prop('selected', true);
            }
        });

        if ((currentRow+1) % 2 == 0) {
            $("#TypeWeek :nth-child(3)").prop('selected', true);
        } else if ($("#" + currentTable + " tr:nth-child(" + (currentRow + 2) + ") td.botweek").is(":visible")){
            $("#TypeWeek :nth-child(2)").prop('selected', true);
        } else {
            $("#TypeWeek :nth-child(1)").prop('selected', true);
        }
    });





    $("#SettingsMenu li").removeClass("active");
    $("#SettingsMenu li:nth-child(2)").addClass("active");

});