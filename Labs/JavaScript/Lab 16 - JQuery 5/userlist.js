//replicating ajax 2 but with jquery
$(document).ready(function() {
    var data = "";
    var url = "https://reqres.in/api/users";

    $("button").click(function() {
        $("#response").html("");
        data = (parseInt($(this).html()) > 0) ? "page=" + parseInt($(this).html()) : "per_page=1000";

        $.get(url + "?" + data, function(result) {
            $(result.data).each(function(field) {
                $("#response").append(
                                    "<tr>"
                                    + "<td>" 
                                    + field.id
                                    + "</td>"
                                    + "<td>" 
                                    + "<img src='"
                                    + field.avatar + "' style='width:64px;'>"
                                    + "</td>"
                                    + "<td>" 
                                    + field.first_name + " " + field.last_name
                                    + "</td>"
                                    + "<td>"
                                    + "<a href='mailto:" +  
                                    + field.email + "'>" + field.email + "</a>"
                                    + "</td>"
                                    + "</tr>"
                );
            });
        });
    });
});