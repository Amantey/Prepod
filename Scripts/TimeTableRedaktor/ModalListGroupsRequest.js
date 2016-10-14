$(document).ready(function () {
    $("#RedaktorGroup").on("shown.bs.modal", function (event) {
        event.preventDefault();
        
        $.get('/GetAllGroups/Index', function (groups) {
         
            var title = "";
            var content = "<tbody>"
            var columns = "";

            title += "<thead> <tr>";

            for (j = 0; j < 4; j++) {    // количество колонок          
                    title += "<th></th>"; 
            }
            
            title += "</tr> </thead>";


            $("#DivideGroupsTable").append(title);
            for (j = 0; j < 3; j++) {
                columns += "<td class = " + 'col' + j + "></td>";
            }

           /* for (i = 0; i < ; i++) {  // строки
                content += '<tr>';
                content += "<td  class = 'no-target Students_name'>" + columns + '</tr>';

            }*/


            content += "</tbody>";

            $("#DivideGroupsTable").append(content);
        })
    });
});