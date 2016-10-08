$(document).ready(function () {
    var content = "<tbody>"
    var columns = "";
    var title = "";
    var show = 0;

    $.ajaxSetup({ cache: false });
    $(".compItem").click(function (e) {
        e.preventDefault();
        $.get('Students/Index', function (data) {
            CreateTable(data);
                
                
        });
    });

    var CreateTable = function (students) {
        
        // КОСТЫЛЬ!
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

        for (i = 0, j=0; i < students.length*2; i++) {  // строки
            content += '<tr>';
            if (i % 2 == 0) {     
                
                content += "<td rowspan='2' class = 'no-target'  > " + (j+1) + ". "+ students[j] + "</td>" + columns + '</tr>';
                j++
             }
            else content += columns + '</tr>';
                   
        }


        content += "</tbody>"
        $("#TableListOfStudentPrak").append(content);
        //$("#TableListOfStudentPrak first:th:nth-child(odd)").html("ФИО")
    }
    
    
});