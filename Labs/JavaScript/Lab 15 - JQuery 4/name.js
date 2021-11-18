//replicating ajax 1 lab but using jquery
$(document).ready(function() {
    $("button").click(function() {
        //find another way to do this later
        var data = "";
        var inputs = document.querySelectorAll("input");
        for (var i = 0; i < inputs.length; i++){
            data += inputs[i].getAttribute("name"); 
            data += "=";
            data += inputs[i].value;
            data += "&";
        }
        data = data.substring(0, data.length - 1);
        console.log(data);
        
        var url = "name.txt";

        //using POST method
        //$.post(url, data, function(result) {
        //    $("#response").html(result);
        //});

        //using GET method
        $.get(url + "?" + data, function(result) {
            $("#response").html(result);
        });
    });
});
//$("<tr></tr>") -> creates the element