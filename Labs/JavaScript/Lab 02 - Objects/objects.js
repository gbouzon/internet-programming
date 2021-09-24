//object lab

//creating an Anonymous object (without a class/defined constructor)
var person = {fname: "Ron", lname: "Raphael", age: 50};

//to get the type of a variable : typeof <identifier>

//to add another property to your object:
person.eyeColour = "hazel";

//to change the value of an existing property
person.age = 154;

//to redefine an object
person = {age: 12, name: "Sarah Primavera", arms: true, legs: true, hairColour: "purple"};

var car = {colour: "Silver", type: "SUV", year: 2020};

//making car object created above a property of 'person'
person.myCar = car;

//assigning a function to a newly created property
person.drive = function() {
    console.log("what in the heck");
    return true;
}

//the property drive is now a function. By calling it like a property, you get a description of the function (person.drive;)
//By calling it as a function, you get the result of the function call (person.drive();)

//to print each property of an object using for..in
for (property in person) {
    console.log(property);
}

//to print the value of each property of an object 
for (property in person) {
    console.log(propety + " -> " + person[property])
}

// we do this ^ instead of person.property because JavaScript interprets this as a new property being created each time
//therefore, the property 'property' is always null.

