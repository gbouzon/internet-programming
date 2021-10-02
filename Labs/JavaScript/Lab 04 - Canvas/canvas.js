//drawing stuff using canvas element

//declaring variables
var cnv, ctx;
var arr = new Array();

//constructor for Circle
function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 35;
    this.direction = 1;
    this.colour = "#" + Math.floor(Math.random() * 26777215).toString(16); //generating a random colour using hex
    this.speed = Math.random() * 10;

    //a property can store an object, so properties can store a function
    this.draw = function() {
        
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    //move property stores a function
    //function can be called through the property
    this.move = function() {
        this.x += (10 * this.direction * this.speed);

        //makes circle change to opposite direction when it reaches the canvas edge
        if (this.x + this.radius >= cnv.width) 
            this.direction = -1;
        if (this.x - this.radius <= 0) 
            this.direction = 1;
    }
}

//simulates a circle moving across the screen 
function animation() {
    //cnv and ctx called here because the script is called through animation() function (loads first)
    cnv = document.getElementById("myCanvas"); //gets canvas
    ctx = cnv.getContext("2d"); //gets 2d context

    for (var i = 0; i < 100; i++) 
        arr[i] = new Circle(Math.random() * cnv.width, Math.random() * cnv.height);
    
    //setInterval() calls specified function every <interval>, in this case 1/10 of a second
    setInterval(function() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        for (var i = 0; i < arr.length; i++) {
            arr[i].draw();
            arr[i].move();
        }
    }, 100);
}

//a function to demo drawing lines
function drawLines() {
    cnv = document.getElementById("myCanvas");
    ctx = cnv.getContext("2d");

    //drawing a triangle
    ctx.moveTo(50, 50);

    ctx.lineTo(100, 100);
    ctx.lineTo(150, 50);
    ctx.lineTo(50, 50);

    ctx.stroke();
}

//a function to demo drawing circles
//note that fillStyle is NOT a method like fillRect, it is a property so NO PARAMETERS.
function drawCircles() {
    cnv = document.getElementById("myCanvas");
    ctx = cnv.getContext("2d");

    ctx.fillStyle = "#EAF918";
    ctx.arc(150, 150, 35, 0, Math.PI * 2);

    //stroke() only does the contour
    //if we omit this and just fill() -> no outline
    ctx.stroke(); 
    ctx.fill();
}

// a function to demo drawing squares/rectangles
function drawRectangles() {
    var cnv = document.getElementById("myCanvas");
    var ctx = cnv.getContext("2d");

    ctx.fillStyle = "#00FF00";

    //fillRect() -> x,y,width,height
    ctx.fillRect(0, 0, 100, 100);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(300, 200, 100, 100);

    ctx.strokeStyle = "#000FF0";
    ctx.fillStyle = "#888888";

    //makes sure canvas knows where the outline is but never actually 'draws' it
    //this only creates an invisible shape so we need to call the stroke() function in order to actually draw it
    ctx.rect(260, 200, 100, 100); 

    ctx.stroke();
    ctx.fill();

    //note: with fillRect(), even if we give it parameters that
    //would infringe on the canvas' edges, it stops before ever going through
}