//creating html elements using JavaScript
//finish this pls

//gets the first <ul> element
var list = document.getElementsByTagName("ul")[0];
var candyArray = ["KitKat", "Coffee Crisp", "Juju Beans", "Gummy Bears"];

//a function to add elements of a list to the html page (ul, li)
function addElementstoDocument(itemList = candyArray, elementType = "li") {
    for (var i = 0; i < itemList.length; i++) {
        let myItem = document.createElement(elementType);
        myItem.innerHTML = itemList[i];
        list.appendChild(myItem);
    }
}

//function to get the value entered by the user using a button (check main.html)
function getVal() {
    var input = document.getElementById("user");
    var userEntry = input.value;
    alert(userEntry);
}


//for debugging purposes
console.log(list);
console.log(candyArray);



