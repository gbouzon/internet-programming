//shows subnav menu underneath nav when clicked (only shows one at a time: next().toggle())
$(document).ready(function() {
    $(".subnav-content").hide(); //make sure all are hidden from the getgo
    
    $(".subnavbtn").click(function () {
        $(".subnav-content").hide();
        $(this).next().toggle();
    });
});

//refactor form validation, userlist, name using jquery
//work on this later