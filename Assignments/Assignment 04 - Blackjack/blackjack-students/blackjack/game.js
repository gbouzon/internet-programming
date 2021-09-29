/////////////////////// FIX YOUR MESS PLS AND THANK /////////////////////////
//TODO 1: check if you really need all these methods

//initializing variables, init() later on if too long 
var generatedCards = []; //to store cards already in game

var playerIndex, dealerIndex; //stores nb of cards dealt for each
playerIndex = dealerIndex = 0;

var dealerScore, playerScore;
dealerScore = playerScore = 0;

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
    document.getElementById(id + index).setAttribute("src", "img/" + card + ".png");
    document.getElementById(id + index).setAttribute("width", "107");
    document.getElementById(id + index).setAttribute("height", "98");  
}

function deal() {
    //deals player two random cards
    createCardElement(generateRandomCard(), "player", ++playerIndex);
    createCardElement(generateRandomCard(), "player", ++playerIndex);
    //updating scores, make method for this
    playerScore += getCardValue(generatedCards[0]);
    playerScore += getCardValue(generatedCards[1]);
    document.getElementById("playerLabel").innerHTML += ": " + playerScore + " points.";
    isValid(playerScore);
    

    //TODO 4: if time allows: make last card added face down for dealer
    //deals dealer two random cards
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);
    //updating scores, ^^
    dealerScore += getCardValue(generatedCards[2]);
    dealerScore += getCardValue(generatedCards[3]);
    document.getElementById("dealerLabel").innerHTML += ": " + dealerScore + " points.";
    isValid(dealerScore);

    //verify();
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
        return generateRandomCard();  
}

//TODO 6: implement methods

function requestPlayerCard() {
    //called when draw 1 more card button is pressed
    var card = generateRandomCard();
    createCardElement(card, "player", ++playerIndex);
    playerScore += getCardValue(card);
    //displayScore
    document.getElementById("playerLabel").innerHTML += ": " + playerScore + " points.";
    isValid(playerScore);
}

function disableButtons() {
    document.getElementById("btnDraw").disabled = true;
    document.getElementById("btnHold").disabled = true;
}

function completeDealerHand() {
    var card = generateRandomCard();
    //disable buttons
    disableButtons();
    while (dealerScore <= 16) {
        createCardElement(card, "dealer", ++dealerIndex);
        dealerScore += getCardValue(card);
        //display score
        document.getElementById("dealerScore").innerHTML += ": " + dealerScore + " points.";
        isValid(dealerScore);
    }
    if (dealerScore <= 21)
        compareScores();

    
    
    //draw another card and add to total
    //verify()

    //else if total >= 27
    //break and compare scores
}

function isValid(total) {
    if (total < 21) return true;
    else if (total > 21) return lose(total);
    else if (total === 21) return win(total);
    else compareScores();
    //compare hands?????????
    //what happens with ties?
    //total < 21 return true
    //total > 21 return lose(total owner)
    //total == 21 return win(total owner)
}

function lose(total) {
    if (total === playerScore)
        return win(dealerScore);
    else if (total === dealerScore)
        return win(playerScore);
}

function win(total) {
    if (total === playerScore)
        document.getElementById("playerLabel").innerHTML += "has won the game";
    else if (total === dealerScore)
        document.getElementById("dealerLabel").innerHTML += "has won the game";

    disableButtons();
}

function compareScores() {
    if ((21 - playerScore) < (21 - dealerScore))
        return win(playerScore);
    else if ((21 - dealerScore) < (21 - playerScore))
        return win(dealerScore);
    else console.log("tie"); //do something for this
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
function getCardValue(card) {
    if ((card - 1) % 13 == 0) //ace 
        return 11;
    else if (isFaceCard(card)) //face cards
        return 10;
    else
        return (card % 13); //everything else
}


//for debugging purposes
console.log(generatedCards);
