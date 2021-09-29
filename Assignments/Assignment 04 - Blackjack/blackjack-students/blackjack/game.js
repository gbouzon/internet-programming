/////////////////////// FIX YOUR MESS PLS AND THANK /////////////////////////
//TODO 1: check if you really need all these methods

//initializing variables, init() later on if too long 
var generatedCards = []; //to store cards already in game

var playerIndex, dealerIndex; //stores nb of cards dealt for each
playerIndex = dealerIndex = 0;

var dealerScore, playerScore;
dealerScore = playerScore = 0;


//enabling buttons because fresh start, check if needed (in case fn)
document.getElementById("btnDraw").disabled = false;
document.getElementById("btnHold").disabled = false;


/*
  Creates an image element (where needed) and displays the corresponding card.
*/
function createCardElement(card, id, index) {
    if (index > 2) {
        //creating a new image element to add next card
        var newImg = document.createElement("img");
        //setting the id to the current index + 1
        newImg.setAttribute("id", id + ++index);
        //adding image to the page
        document.getElementById(id + "Hand").appendChild(newImg);  
    }
    //TODO 2: check error by using variable instead of repeating document line every time
    document.getElementById(id + index).setAttribute("src", "img/" + card + ".png");
    document.getElementById(id + index).setAttribute("width", "107");
    document.getElementById(id + index).setAttribute("height", "98");  
}

function deal() {
    //deals player two random cards
    //TODO 3: BUG - stacked method call screws up recursion in generateRandomCard()
    //image src becomes undefined, only when method goes to else statement, pls check

    createCardElement(generateRandomCard(), "player", ++playerIndex);
    createCardElement(generateRandomCard(), "player", ++playerIndex);

    //testing third card
    //only to be used in requestPlayerCard but testing
    createCardElement(generateRandomCard(), "player", ++playerIndex);

    //TODO 4: if time allows: make last card added face down for dealer
    //deals dealer two random cards
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);

    //verify, if > 21 lose, if == 21 win, if < 21 continue 
    //request player card if continue
}

/*
  Generates a random card from a 52-card deck
  If the card has already been dealt, generate another one.
*/
function generateRandomCard(min = 1, max = 52) {
    var card = Math.floor((Math.random() * (max - min + 1)) + min);

    if (generatedCards.indexOf(card) < 0) {
        generatedCards.push(card); 
        return card;
    }
    else 
        generateRandomCard(); //check stacked method call (deal())
}

//TODO 6: implement methods

function requestPlayerCard() {
    //called when draw 1 more card button is pressed
    //generateRandomCard()
    //update score
    //verify()
}

function completeDealerHand() {
    //disable buttons
    document.getElementById("btnDraw").disabled = true;
    document.getElementById("btnHold").disabled = true;
    //if total <= 16
    //draw another card and add to total
    //verify()

    //else if total >= 27
    //break and compare scores
}

function verify(total) {
    //compare hands?????????
    //what happens with ties?
    //total < 21 return true
    //total > 21 return lose(total owner)
    //total == 21 return win(total owner)
}

/*
  Checks if a given card is a face card (J, Q, K)
*/
function isFaceCard(card) {
    if ((card - 11) % 13 == 0)
        return true;
    else if ((card - 12) % 13 == 0)
        return true;
    else if ((card - 13) % 13 == 0)
        return true;

    return false;
}

/*
  Updates score depending on card
*/
function updatePoints(card, score) {
    if ((card - 1) % 13 == 0) //ace 
        score += 11;
    else if (isFaceCard(card)) //face cards
        score += 10;
    else
        score += (card % 13); //everything else
}


//for debugging purposes
console.log(generatedCards);
console.log(playerIndex);
console.log(dealerIndex);