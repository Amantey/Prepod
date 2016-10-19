$(document).ready(function () {

    var title = "";
    var content = "";
    var CountTR = 14;
    var CountDay = 3;
    var CountTD = 5;
    var TimeWork = new Array('8.30-10.05', '10.25-12.00', '12.30-14.05', '14.20-15.55', '16.05-17.40', '17.45-19.15', '19.15-20.45');


    title += "<thead> <tr>";
    for (var i = 0; i < CountTD + 1; i++) {
        title += "<th class='center headcolor'></th>";
    }
    title += "</tr></thead>";

    $("#TimeTableRedaktorPart1").append(title);
    $("#TimeTableRedaktorPart2").append(title);

    content += "<tbody>"
    for (var currentDay = 0; currentDay < CountDay; currentDay++) {

        for (var currentTR = 0; currentTR < CountTR; currentTR++) {
            content += "<tr class='dayOnClick'>";
            for (var currentTD = 0; currentTD < CountTD; currentTD++) {
                
                    switch (currentTD) {
                        case 0: {
                            if (currentTR % 2 == 0) {
                                content += "<td class='clock' rowspan=2></td>";
                            }
                            break;
                        }
                        case 1: {
                            content += "<td class='SubjectName ' data-toggle ='modal' data-target='#modal-subject'></td>";
                            
                            break;
                        }
                        case 2: {
                            content += "<td class='TypeClass ' data-toggle ='modal' data-target='#modal-subject'></td>"
                           
                            break;
                        }
                        case 3: {
                            content += "<td class='Group ' data-toggle ='modal' data-target='#RedaktorGroup'></td>"
                       
                            break;
                        }
                        case 4: {
                            content += "<td class='Comment' data-toggle ='modal' data-target='#modalComment'></td>"
                           
                            break;
                        }
                        default: {
                            content += "<td></td>"
                        }
                    }
                
            }
            content += "</tr>";

        }
        content += "<tr></tr><tr class='SpaceAmongTables' style='height: 10px; color: burlywood'></tr>"
    }
    content += "</tbody>";
    $("#TimeTableRedaktorPart1").append(content);
    $("#TimeTableRedaktorPart2").append(content);
    $("#TimeTableRedaktorPart1 tr:nth-child(odd) td").addClass("topweek");
    $("#TimeTableRedaktorPart1 tr:nth-child(even) td").addClass("botweek").hide();
    $("#TimeTableRedaktorPart2 tr:nth-child(odd) td").addClass("topweek");
    $("#TimeTableRedaktorPart2 tr:nth-child(even) td").addClass("botweek").hide();
    var NewDayFlag = true;
    for (var indexTR = 1; indexTR < CountTR * CountDay; indexTR++) {
        if (NewDayFlag == true) {
            $("#TimeTableRedaktorPart1 tbody tr:nth-child(" + indexTR + ")").prepend("<td rowspan=" + CountTR + " class='headcolor vertical'>");
            $("#TimeTableRedaktorPart2 tbody tr:nth-child(" + indexTR + ")").prepend("<td rowspan=" + CountTR + " class='headcolor vertical'>");
            NewDayFlag = false;
        }
        if ($("#TimeTableRedaktorPart1 tbody tr:nth-child(" + indexTR + ")").hasClass('SpaceAmongTables')) {
            NewDayFlag = true;
        }
    }

    $("#TimeTableRedaktorPart1 thead th:first").html("День");
    $("#TimeTableRedaktorPart1 thead th:nth-child(" + 2 + ")").html("Часы").addClass("clock");
    $("#TimeTableRedaktorPart1 thead th:nth-child(" + 3 + ")").html("Название предмета");
    $("#TimeTableRedaktorPart1 thead th:nth-child(" + 4 + ")").html("Тип занятия").addClass("typeClass");
    $("#TimeTableRedaktorPart1 thead th:nth-child(" + 5 + ")").html("Группа").addClass("Group");
    $("#TimeTableRedaktorPart1 thead th:nth-child(" + 6 + ")").html("Комментарий");

    $("#TimeTableRedaktorPart2 thead th:first").html("День");
    $("#TimeTableRedaktorPart2 thead th:nth-child(" + 2 + ")").html("Часы").addClass("clock");
    $("#TimeTableRedaktorPart2 thead th:nth-child(" + 3 + ")").html("Название предмета");
    $("#TimeTableRedaktorPart2 thead th:nth-child(" + 4 + ")").html("Тип занятия").addClass("typeClass");
    $("#TimeTableRedaktorPart2 thead th:nth-child(" + 5 + ")").html("Группа").addClass("Group");
    $("#TimeTableRedaktorPart2 thead th:nth-child(" + 6 + ")").html("Комментарий");


    for (var numberTable = 0; numberTable < CountDay; numberTable++) {
        for (var index = 0; index < TimeWork.length; index++) {

            $("#TimeTableRedaktorPart1 tbody td.clock:eq(" + (index + numberTable * 7) + ")").html(TimeWork[index]);
            $("#TimeTableRedaktorPart2 tbody td.clock:eq(" + (index + numberTable * 7) + ")").html(TimeWork[index]);
        }
    }


});