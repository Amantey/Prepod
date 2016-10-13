$(document).ready(function () {

    $(".compItem").click(function (e) {
        
        e.preventDefault();
        $.get('Students/Index', function (students) {
            var title = "";
            var content = "<tbody>"
            var columns = "";
           
            title += "<thead>";

            for (k = 0; k < 2; k++) {
                title += "<tr>";

                for (j = 0; j < 15; j++) {    // количество колонок          
                    if (k == 0) {
                        title += "<th class= 'DateInDay no-target'></th>";
                    } else { title += "<th></th>"; }
                }
            }
            title += "</tr>";
            title += " </thead>";


            $("#TableListOfStudentPrak").append(title);

            for (j = 0; j < 14; j++) {
                columns += "<td class = " + 'col' + j + "></td>";
            }

            for (i = 0, j = 0; i < students.length * 2; i++) {  // строки
                content += '<tr>';
                
                if (i % 2 == 0) {
                    content += "<td rowspan='2' class = 'no-target Students_name'>" + students[j] + " </td>" + columns + '</tr>';
                    j++;
                }
                else content += columns + '</tr>';
            }


            content += "</tbody>";
            
            $("#TableListOfStudentPrak").append(content);
            $("#TableListOfStudentPrak thead th:first").attr("rowspan", "2").html("ФИО");
            $("#TableListOfStudentPrak thead th:last").remove();
        })
    });
    $('#modalListOfStudentPrak').on('hidden.bs.modal', function () {
        $('#TableListOfStudentPrak').remove();
        $("#modal-body-prak").html('<table class="table table-striped table-bordered cell-size" id="TableListOfStudentPrak"></table>');
    });
});