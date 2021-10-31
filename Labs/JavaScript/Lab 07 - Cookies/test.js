//tested using Apache server on Xampp:
//server looks for a file named index to diplay as the main page when we do 'localhost'

function updateColour() {
    //getting the colour selected from the dropdown
    var colour = document.getElementsByTagName("select")[0].value;
    //setting the background colour to the colour selected above
    document.getElementsByTagName("body")[0].setAttribute("style", "background-color:" + colour + ";");
   
    //getting the font_size selected (radio buttons) 
    var size;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked)
        size = inputs[i].value;
    }

    //getting the font weight selected from the dropdown
    //notice [1], getElementsByTagName returns an array with all html elements of specified tag
    //index 0 will be the first select tag which we used for the colour, therefore index 1 is what we need
    var weight = document.getElementsByTagName("select")[1].value;

    //setting the backgroudcolour, font_size and font_weight to selected values
    document.getElementsByTagName("body")[0].setAttribute("style", "background-color:" + colour + ";font-size:" + size
    + ";font-weight:" + weight);

    //creating anonymous object containing colour, size and weight (to test cookies and json)
    oData = {};
    oData.colour = colour;
    oData.fontSize = size;
    oData.fontWeight = weight;

    //creating a cookie using stringify method of JSON class (basically a toString)
    document.cookie = "bgColour=" + JSON.stringify(oData);

    //important: only one cookie per website, therefore whenever we rewrite make sure to keep the same order
    //or delete the cookie from browser cache, else: eRrOrs (not the fun ones)
}

function getStartColour() {
    //separating in 2 strings, first one represents whatever comes before the = and the other after
    //taking the second string aka whatever comes after the = which is the colour

    var oData = JSON.parse(document.cookie.split("=")[1]);
    document.getElementsByTagName("body")[0].setAttribute("style", "background-color:" + oData.colour + ";font-size:" + oData.fontSize
    + ";font-weight:" + oData.fontWeight + ";");
}