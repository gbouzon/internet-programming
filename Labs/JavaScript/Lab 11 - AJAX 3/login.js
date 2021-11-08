function login() {
    //this is where the user's login fields are
    var url = "https://reqres.in/api/login"; 
    var user = getUserInput();
    console.log(user); //debugging purposes
    var xh = new XMLHttpRequest();

    xh.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var o = JSON.parse(this.responseText);
            if (o.token) //basically: if token exists do that? i dunno anymore at this point
                window.location.href = "http:/localhost/ajax 3/home.html"; //changes page to that (again, on localhost)
                //add message to be displayed once token passes
        } 
        else {
            //add divs with messages to be displayed here laters pls
        }
    }
    //using POST method
    xh.open("POST", url, true); 
    xh.setRequestHeader("Content-type", "application/json");
    xh.send(JSON.stringify(user));
}

//retrieves user input for email and password fields
function getUserInput() {
    var userEmail = document.getElementById("user").value;
    var userPassword = document.getElementById("password").value;

    //returns an anonymous object containing email & password
    //notice that the property names are the same as the ones the url uses (I don't need to explain this, you should know the reason)
    return {email: userEmail, password: userPassword};
}