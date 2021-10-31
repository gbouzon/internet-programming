//this basically redefines JS's window object's onload function
//aka calls this when the page loads
window.onload = function() {
    //taking the cookie string and storing it in an object
    var oData = JSON.parse(document.cookie.split("=")[1]);
    console.log(oData); //debugging purposes
    //whenever the page loads, it will automatically log in using the username and password previously input
    document.getElementById("user").value = oData.user;
    document.getElementById("password").value = oData.password;
    //two lines above basically fill in the fields for us using info we stored in the cookie
}

function saveLogin() {
    //creating anonymous object
    var oData = {};
    //storing the string entered in 'username' field in user property of the object
    oData.user = document.getElementById("user").value;
    //storing the string entered in 'password' field in password property of the object
    oData.password = document.getElementById("password").value;
    console.log(oData); //debugging purposes
    //creating the cookie using a toString of the object created above
    document.cookie = "login=" + JSON.stringify(oData);
}

/** THINGS TO KEEP IN MIND ABOUT THE METHODS IMPLEMENTED ABOVE:
 * no exception handling is done whatsoever
 * if cookies are disabled, an error will occur
 * if cookie is null (no input), an error will occur (can't parse a null object)
 * ALWAYS verify things when dealing with cookies
 * keep client options in mind to make sure we don't end up with errors
 */
