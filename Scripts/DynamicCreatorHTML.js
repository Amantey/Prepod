$(document).ready(function () {
    var content = "<tbody>"
    var columns = "";
    var title = "";


    $.ajaxSetup({ cache: false });
    $(".compItem").click(function (e) {
       
        e.preventDefault();
        $.get('Students/IndexP', function (students) {
            
            
        });
    });

    var CreateTable = function () {


        title += "<thead>";

        for (k = 0; k < 2; k++) {
            title += "<tr>";
            for (j = 0; j < 15; j++) {    // количество колонок          
                title += "<th></th>";

            }
            title += "</tr>";
        }
        title += " </thead>";
        $("#TableListOfStudentPrak").append(title);

        for (j = 0; j < 14; j++) {
            columns += "<td class = " + 'col' + j + "></td>";
        }


        for (i = 0; i < 15 - 1; i++) {  // строки
            content += '<tr>';
            if (i % 2 == 0) {                   
                 content += "<td rowspan='2' class = 'no-target'  > </td>" + columns + '</tr>';
             }
            else content += columns + '</tr>';
                   
        }

        


        content += "</tbody>"
        $("#TableListOfStudentPrak").append(content);
    }
    
    CreateTable();
});