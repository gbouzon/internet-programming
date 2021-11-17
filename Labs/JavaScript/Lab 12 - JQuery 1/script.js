$(document).ready(function() {
    //waits for the document to be ready
    //equivalent to onload in html
    //waits for the document to be fully loaded by the browser before executing the instructions in the file

    //write less, do more -> purpose of jquery
    //same getElementsByTagName in pure js
    $("p").hide(); //does not erase element, it just hides it
    //basically changes the display property of css to none, basically makes it invisible
    //hides ALL p elements

    //same as getElementById
    $("#test").hide(); //only one element will be hidden (since # represents an id)

    //same as getElementByClassName
    $(".test").hide();

    $("p, h1").hide(); //hides both p elements and h1 elements

    $(this).hide() //we want the 'current' element to be effected/targetted by the action

    //basically, whenever we click on ANY paragraph element, it makes the p that was clicked on disappear
    $("p").click(function() {
        $(this).hide();
    })

    //whenever I click on ANY paragraph element, it makes ALL paragraph elements disappear
    $("p").click(function() {
        $("p").hide();
    })
});