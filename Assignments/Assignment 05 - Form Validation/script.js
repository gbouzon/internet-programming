//clean getCheckboxes and getName() when ya get some time pls
//generalize this stuff laters

/**
 * Retrieves the checked checkboxes from the 'pets' section
 * @returns a string containing the values of each checked checkbox
 */
function getCheckboxes() {
    var pets = document.getElementsByName("pets");
    var petStr = ""; //declaring variable as String

    for (var i = 0; i < pets.length; i++)
        if (pets[i].checked)
            petStr += pets[i].value + " ";
    
    return petStr;
}

/**
 * Retrieves the checked radio button for 'gender'
 * @returns the checked radio button's value
 */
function getGender() {
    var genders = document.getElementsByName("gender");
    var genderValue = "";

    if (genders[0].checked)
        genderValue += genders[0].value;
    else if (genders[1].checked)
        genderValue += genders[1].value;

    return genderValue;
}

/**
 * Retrieves the selected 'age' option from the dropdown
 * @returns the selected option's value
 */
function getAge() {
    var options = document.getElementsByTagName("option");
    var age = "";

    if (options[0].selected)
        age += options[0].value;
    else if (options[1].selected)
        age += options[1].value;
    else if (options[2].selected)
        age += options[2].value;

    return age;
}

/**
 * Displays the value of all entered form information on the console.
 * @returns {void}
 */
function getName() {
    console.log("First Name is: " + document.getElementById("fName").value);
    console.log("Last Name is: " + document.getElementById("lName").value);
    console.log("Username is: " + document.getElementsByName("username")[0].value);
    console.log("Password is: " + document.getElementsByName("pswd")[0].value);
    console.log("Email is: " + document.getElementsByName("email")[0].value);
    console.log("Gender is: " + getGender());
    console.log("Pets selected: " + getCheckboxes());
    console.log("Comments is: " + document.getElementsByName("comments")[0].value);
    console.log("Age is: " + getAge());
}

//test validation with nonsense
//if any validation conditions fail, console.log()

//make validate functions return true if tests pass and false if otherwise
//validateForm() will only allow submission if all other validate functions return true
//error messages ^^

/**
 * Checks if the entered strings in 'fName' and 'lName' sections of the form are valid according to preset conditions.
 * @returns true if valid and false if otherwise.
 */
function validateName() { //clean laters
    var nameRegex = /^[A-Z](?!.*[-]$)(?!.*[-]{2})[\-a-zA-Z]{0,15}$/;
    //start with uppercase, negative lookahead to disallow dashes at the end, 
    //negative lookahead to disallow consecutive dashes, letters or dashes after first character
    //length must be between 1 and 16
    //todo: if time, disallow uppercase after first letter, except if preceding character is a dash
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;

    //for debugging, erase before submission pls and thank
    console.log(firstName);
    console.log(lastName);
    console.log(nameRegex.test(firstName));
    console.log(nameRegex.test(lastName));

    if (nameRegex.test(firstName) == false) { 
        console.log("First name is not valid.");
        document.getElementById("fName").value = "";
        return false;
    }

    else if (nameRegex.test(lastName) == false) {
        console.log("Last name is not valid.");
        document.getElementById("lName").value = "";
        return false;
    }
    
    return true;
}

/**
 * Checks if the entered string in 'password' section of the form is valid according to preset conditions.
 * @returns true if valid and false if otherwise.
 */
function validatePassword() {
    var passwordRegex = /^(?=(.*[A-Z]){1})(?=(.*\d){2})[a-zA-Z0-9?!.]{8,16}$/;
    //positive lookahead to make sure there is at least one capital letter
    //positive lookahead to make sure there is at least 2 numbers
    //allows letters, numbers, ?, ! and .
    //length must be between 8 and 16
    var password = document.getElementsByName("pswd")[0].value;
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    //checks if password contains either first or last name, case insensitive
    var containsFirstName = password.toLowerCase().includes(firstName.toLowerCase());
    var containsLastName = password.toLowerCase().includes(lastName.toLowerCase());

    //for debugging purposes
    console.log(password);
    console.log(containsFirstName);
    console.log(containsLastName);
    console.log(passwordRegex.test(password));

    if (passwordRegex.test(password) == false || containsFirstName || containsLastName) { 
        console.log("Password is not valid.");
        document.getElementsByName("pswd")[0].value = "";
        return false;
    }

    return true;
}

function validateUsername() {
    //initial regex: ^[a-zA-Z][a-zA-Z0-9_.]{0,15}$ - to be tested & refactored

    //criteria:
    //1. alphanumerical
    //2.{6,16}
    //3. allow _ and .
}

/**
 * Checks if the entered string in 'email' section of the form is valid according to preset conditions.
 * @returns true if valid and false if otherwise.
 */
function validateEmail() {
    //further testing needed obv
    var emailRegex = /^[a-zA-Z](?!.*[-_.]{2})[a-zA-Z0-9-_.]{0,15}@[a-zA-Z]{2,24}((.qc)?.ca|.com)$/;
    //starts with a letter
    //negative lookahead do disallow consecutive -,. or _
    //allowing letters, numbers and -,., _ for username, length must be between 1 and 16
    //domain: must be preceded by a @
    //start with a letter and length between 2 and 24
    //extension must be .qc.ca, .ca or .com
    var email = document.getElementsByName("email")[0].value;
    
    //for debuggin, erase laters
    console.log(email);
    console.log(emailRegex.test(email));

    if (emailRegex.test(email) == false) {
        console.log("Email is not valid.");
        document.getElementsByName("email")[0].value = "";
        return false;
    }
    
    return true;
}

/**
 * Submits the form if and only if all input is valid.
 * Validation of each field is done by specified methods.
 */
function validateForm() {
    //to be tested
        if (validateName() && validateEmail() && validatePassword())
            document.getElementsByTagName("form")[0].submit(); 
    //form can only be submitted once all the previous functions return no error
}