$(document).ready(function () {
    var content = "<tbody>"
    var columns = "";
    var title = "";


    $.ajaxSetup({ cache: false });
    $(".compItem").click(function (e) {
        alert("wd")
        e.preventDefault();
        $.get('Students/IndexP', function (data) {
            $('#dialogContent').html(data);
            $('#modDialog').modal('show');
        });
    });

    var CreateTable = function () {
        alert("wdawdw")
        // КОСТЫЛЬ!
        title += "<thead>";

        for (k = 0; k < 2; k++) {
            title += "<tr>";
            for (j = 0; j < 15; j++) {    // количество колонок          
                title += "<th></th>";
                // ВНИМАНИЕ КОСТЫЛЬ! 
            }
            title += "</tr>";
        }
        title += " </thead>";
        $("#TableListOfStudentPrak").append(title);

        for (j = 0; j < 14; j++) {
            columns += "<td class = " + 'col' + j + "></td>";
        }

        

        content += "</tbody>"
        $("#TableListOfStudentPrak").append(content);
    }
    
    CreateTable();
});