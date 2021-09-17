function show() {
    window.alert("Hello World");
}  

//think before you code

//notice the lack of a return type & of data type for variables 
function changeTitle() {
    document.getElementById("ttl").innerHTML = "Title Changed";
}

function changeDiv() {
    var divElements = document.getElementsByTagName("div");

    for (var i = 0; i < divElements.length; i++) {
        if ((divElements[i].innerHTML == "" || divElements[i].innerHTML == null) && i % 2 == 0)
            divElements[i].innerHTML = "Giuliana";
        else
            divElements[i].innerHTML = "A random number: " + generateRandomNumber(max = 52);
    }
}

function changeClass() {
    var myClasses = document.getElementsByClassName("text");
    for (var i = 0; i < myClasses.length; i++)
        myClasses[i].innerHTML = "Changed class text";
}

function generateRandomNumber(min = 1, max = 10) {
    //Math.random -> [0, 1)
    //if multiplied by 10 -> [0, 10), in this case 10 is the range, *not* the max
    //if added 1 -> [1, 11) aka [1, 10.9999999]
    // if rounded down -> [1, 10]
    return Math.floor((Math.random() * (max - min + 1)) + min);
}