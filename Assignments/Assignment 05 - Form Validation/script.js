function getName() {
    //displays the value of ALL entered info in the console
}

//test validation with nonsense
//if any validation conditions fail, console.log()

function validateName() {
    //criteria:
    //1. only letters
    //2. first letter is uppercase
    //3. {1,16}
    //4. dash allowed 
}

function validatePassword() {
    //criteria:
    //1. alphanumerical 
    //2.allow ?, ! and .
    //3. must have at least one capital letter
    //4. {8,16}
    //5. does not contain first name NOR last name
    //6. must have at least 2 numbers
}

function validateUsername() {
    //criteria:
    //1. alphanumerical
    //2.{6,16}
    //3. allow _ and .
}

function validateEmail() {
    //criteria:
    //1. format: username@domain.ext
    //username part: 
        //must start with an alphanumerical character
        //alphanumerical
        //allow _, - or .
        //{1, 16}
        //must be followed by @
    //domain part:
        //alphanumerical
        //allow .
        //{2,24}
        //must start and end with a letter
    //extension part:
        //.com or .ca or .qc.ca
}

function validateForm() {
    //form can only be submitted once all the previous functions return no error
}