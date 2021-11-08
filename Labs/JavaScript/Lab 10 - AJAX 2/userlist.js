function getList(pageNumber = -1) {
    document.getElementById("response").innerHTML = ""; //clearing page whenever the button is clicked
    //shows all (default per_page is 7 so it will only show from beg - 7 if we don't modify it, therefore "all" will NOT be showed.
    var data = (pageNumber > 0) ? "page=" + pageNumber : "per_page=1000"; 
    //gonna bring us to this domain's root folder > api > users (this is where the info we're looking for is)
    var url = "https://reqres.in/api/users"; 
    //sending request
    var xh = new XMLHttpRequest();
    xh.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var oData = JSON.parse(this.responseText);
            console.log(oData); //just for debugging 
            var tableRow = "";
            for (var i = 0; i < oData.data.length; i++) {
                //hard coding the table cause time
                //if you got some extra, do this with the attributes and appendChild instead
                tableRow += "<tr>"
                            + "<td>" 
                            + oData.data[i].id
                            + "</td>"
                            + "<td>" 
                            + "<img src='"
                            + oData.data[i].avatar + "' style='width:64px;'>"
                            + "</td>"
                            + "<td>" 
                            + oData.data[i].first_name + " " + oData.data[i].last_name
                            + "</td>"
                            + "<td>"
                            + "<a href='mailto:" +  
                            + oData.data[i].email + "'>" + oData.data[i].email + "</a>"
                            + "</td>"
                            + "</tr>";
                
            }
            document.getElementById("response").innerHTML = tableRow;
        } 
    }
    //using GET method
    xh.open("GET", url + "?" + data, true);
    xh.send();
}

//build a login page
//request
//only going to next page home.html if the login is successful
//if it's not successful > fix the problem
//if it provide me with a token: it's okay move to next page
//if it didn't provide me with a token: stay in the same page till the user figures it out
//lock user out after 3 attempts