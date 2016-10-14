$(document).ready(function () {


    var title = "";
    var content = "";
    var CountTR = 7;
    var CountDay = 3;
    var CountTD = 3;
    var TimeWork = new Array('8.30-10.05', '10.25-12.00', '12.30-14.05', '14.20-15.55', '16.05-17.40', '17.45-19.15', '19.15-20.45' );


    title += "<thead> <tr>";
    for(var i = 0; i < CountDay+1; i++){
        title += "<th class='center headcolor'></th>";
    }
    title += "</tr></thead>";

    $("#timeTableCreatePart1").append(title);
    $("#timeTableCreatePart2").append(title);

    content += "<tbody>"
    for (var currentDay = 0; currentDay < CountDay; currentDay++) {
        
        for (var currentTR = 0; currentTR < CountTR; currentTR++) {
            content += "<tr class='dayOnClick'>";
            for (var currentTD = 0; currentTD < CountTD; currentTD++) {
                switch (currentTD) {
                    case 0: {
                        content += "<td class='clock'></td>";
                        break;
                    }
                    case 1: {
                        content += "<td class='SubjectName'></td>";
                        break;
                    }
                    case 2: {
                        content += "<td class='TypeClass'></td>"
                        break;
                    }
                    default: {
                        content+= "<td></td>"
                    }
                }
            }
            content += "</tr>";
            
        }
        content += "<tr class='SpaceAmongTables' style='height: 10px; color: burlywood'></tr>"
    }
    content += "</tbody>";
    $("#timeTableCreatePart1").append(content);
    $("#timeTableCreatePart2").append(content);

    var NewDayFlag = true;
    for (var indexTR = 1; indexTR < CountTR * CountDay; indexTR++) {
        if (NewDayFlag == true) {
            $("#timeTableCreatePart1 tbody tr:nth-child(" + indexTR + ")").prepend("<td rowspan=" + CountTR + " class='headcolor vertical'>");
            $("#timeTableCreatePart2 tbody tr:nth-child(" + indexTR + ")").prepend("<td rowspan=" + CountTR + " class='headcolor vertical'>");
            NewDayFlag = false;
        }
        if ($("#timeTableCreatePart1 tbody tr:nth-child(" + indexTR + ")").hasClass('SpaceAmongTables')) {
            NewDayFlag = true;
        }
    }

    $("#timeTableCreatePart1 thead th:first").html("День");
    $("#timeTableCreatePart1 thead th:nth-child(" + 2 + ")").html("Часы").addClass("clock");
    $("#timeTableCreatePart1 thead th:nth-child(" + 3 + ")").html("Название предмета");
    $("#timeTableCreatePart1 thead th:nth-child(" + 4 + ")").html("Тип занятия").addClass("typeClass");

    $("#timeTableCreatePart2 thead th:first").html("День");
    $("#timeTableCreatePart2 thead th:nth-child(" + 2 + ")").html("Часы").addClass("clock");
    $("#timeTableCreatePart2 thead th:nth-child(" + 3 + ")").html("Название предмета");
    $("#timeTableCreatePart2 thead th:nth-child(" + 4 + ")").html("Тип занятия").addClass("typeClass");

    for (var numberTable = 0; numberTable < CountDay; numberTable++) {
        for (var index = 0; index < TimeWork.length; index++) {
     
            $("#timeTableCreatePart1 tbody td.clock:eq(" + (index + numberTable * 7) + ")").html(TimeWork[index]);
            $("#timeTableCreatePart2 tbody td.clock:eq(" + (index + numberTable * 7) + ")").html(TimeWork[index]);
        }
    }
});