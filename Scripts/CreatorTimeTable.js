$(document).ready(function () {


    var title = "";
    var content = "";
    
    title += "<thead> <tr>";
    for(var i = 0; i < 4; i++){
        title += "<th class='center headcolor'></th>";
    }
    title += "</tr></thead>";

    $("#timeTableCreate").append(title);

    content += "<tbody>"
    for (var countDay = 0; countDay < 3; countDay++) {
        
        for (var countTR = 0; countTR < 6; countTR++) {
            content += "<tr class='dayOnClick'>";
            for (var countTD = 0; countTD < 3; countTD++) {
                content += "<td></td>";
            }
            content += "</tr>";
            
        }
        content += "<tr style='height: 10px; color: burlywood'></tr>"
    }
    content += "</tbody>";
    $("#timeTableCreate").append(content);

    $("#timeTableCreate .dayOnClick:first").after("<td rowspan='7' class='headcolor vertical'>");
   // $("#timeTableCreate .dayOnClick:nth-child(7)").before("<td rowspan='7' class='headcolor vertical'>");
});