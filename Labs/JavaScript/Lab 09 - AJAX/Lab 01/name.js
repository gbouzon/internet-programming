//its purpose is to get info from input boxes in form
function makeCall() {
    //data I'm gonna send
    var data = ""; 
    //getting all user input (in our case 2: lname and fname)
    var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) {
        //adding it and formatting it to look like the same as it does in link with form 'GET' method 
        //fname=dsjdoa&lname=fndkfnd -> this is the format it shows in the url when we use form with get method ^^
        data += inputs[i].getAttribute("name"); 
        data += "=";
        data += inputs[i].value;
        data += "&";
    }

    data = data.substring(0, data.length - 1); //removing last & from my string (no more properties)
    console.log(data) //debugging purposes

    //the 'url' in our case is the txt file. Just an example for educational purposes.
    var url = "name.txt";
    //sending request
    //we only have access to this class with a server so this will NOT work if we are not running it on localhost
    var xh = new XMLHttpRequest();
    xh.onreadystatechange = function() {
        //status 200 means the request was successful (for more info, look up request codes)
        if (this.readyState == 4 && this.status == 200) {
            //responsetext is the property that holds the info that we got back as an answer to our request
            document.getElementById("response").innerHTML = this.responseText; 
        }
    }
    //using GET method:
    //xh.open("GET", url + "?" + data, true);
    //xh.send();

    //using POST method
    xh.open("POST", url, true); //we only use url here because in post we do not send the info along with the url
    //x-www-form-urlencoded: embedded encoding - only use this for URL encoding
    //for JSON for example we would use "application/JSON"
    xh.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xh.send(data);

    //sends a request to "name.txt?fname=henry&lname=ford"
    //usually, when we do html forms, input goes to url in order for php script to take that info
}