/////////////////////// FIX YOUR MESS PLS AND THANK /////////////////////////
//TODO 1: check if you really need all these methods

//initializing variables

//to store cards already in the game
var generatedCards = []; 

//to store nb of cards dealt for each
var playerIndex, dealerIndex;
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
        newImg.setAttribute("id", id + index);
        //adding image to the page
        document.getElementById(id + "Hand").appendChild(newImg);  
    }
    //console.log("image added:" + document.getElementById(id + "Hand").innerHTML);
    document.getElementById(id + index).setAttribute("src", "img/" + card + ".png");
    document.getElementById(id + index).setAttribute("width", "107");
    document.getElementById(id + index).setAttribute("height", "98");  
}

function deal() {
    //deals player two random cards
    createCardElement(generateRandomCard(), "player", ++playerIndex);
    createCardElement(generateRandomCard(), "player", ++playerIndex);
    //updating scores
    playerScore += getCardValue(generatedCards[0]);
    playerScore += getCardValue(generatedCards[1]);

    //TODO 3: try finding a way to += instead of resetting every time
    document.getElementById("playerLabel").innerHTML = "Player: " + playerScore + " points.";
    isValid(playerScore);

    //TODO 4: if time allows: make last card added face down for dealer
    //deals dealer two random cards
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);
    //updating scores, ^^
    dealerScore += getCardValue(generatedCards[2]);
    dealerScore += getCardValue(generatedCards[3]);
    document.getElementById("dealerLabel").innerHTML = "Dealer: " + dealerScore + " points.";
    isValid(dealerScore);
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

/*
    Called when "Draw 1 more card" button is pressed
*/
function requestPlayerCard() {
    //called when draw 1 more card button is pressed
    var card = generateRandomCard();
    createCardElement(card, "player", ++playerIndex);
    playerScore += getCardValue(card);
    //displayScore
    document.getElementById("playerLabel").innerHTML = "Player: " + playerScore + " points.";
    isValid(playerScore);
}

/*
    Disables buttons draw and hold.
*/
function disableButtons() {
    document.getElementById("btnDraw").disabled = true;
    document.getElementById("btnHold").disabled = true;
}

function completeDealerHand() {
    var card = generateRandomCard();
    //disable buttons
    disableButtons();
    if (dealerScore <= 16) {
        createCardElement(card, "dealer", ++dealerIndex);
        dealerScore += getCardValue(card);
        //display score
        document.getElementById("dealerLabel").innerHTML = "Dealer: " + dealerScore + " points.";
        completeDealerHand();
    }
    else if (dealerScore <= 21)
        compareScores();

    isValid(dealerScore);
}

function isValid(total) {
    if (total < 21) return true;
    else if (total > 21) return lose(total);
    else if (total === 21) return win(total);
    else compareScores();
    //change it a bit and add condition for ties
}

//TODO 5: make this better cause bleh
function lose(total) {
    if (total === playerScore)
        return win(dealerScore);
    else if (total === dealerScore)
        return win(playerScore);
}

function win(total) {
    disableButtons();

    if (total === playerScore) {
        document.getElementById("playerLabel").innerHTML = "Player has won the game";
        document.getElementById("playerLabel").style.color = "green"; 
    }
    else if (total === dealerScore) {
        document.getElementById("dealerLabel").innerHTML = "Dealer has won the game"; 
        document.getElementById("dealerLabel").style.color = "green"; 
    }
}

function compareScores() {
    if ((21 - playerScore) < (21 - dealerScore))
        return win(playerScore);
    else if ((21 - dealerScore) < (21 - playerScore))
        return win(dealerScore);
    else return tie();
}

function removeImgs(id, index) {
    for (var i = index; i > 1; i--) {
        console.log("test" + id + i);
        document.getElementById(id + i).remove();
    }
}

function tie() {
  //trial 1, refactor later
  //deleting all player's cards
  removeImgs("player", playerIndex);
  //deleting all dealer's cards
  removeImgs("dealer", dealerIndex);

  
  
  //generate one more card for each and the card with the highest value will define the winner
  var playerCard = generateRandomCard();
  console.log(playerCard);
  var dealerCard = generateRandomCard();
  console.log(dealerCard);

  //player
  document.getElementById("player1").setAttribute("src", "img/" + playerCard + ".png");
  playerScore = getCardValue(playerCard);
  document.getElementById("playerLabel").innerHTML = "Dealer: " + playerScore + " points.";
  //dealer
  document.getElementById("dealer1").setAttribute("src", "img/" + dealerCard + ".png");
  dealerScore = getCardValue(dealerCard);
  document.getElementById("dealerLabel").innerHTML = "Dealer: " + dealerScore + " points.";
  
  return compareScores();
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
  Retrieves the value of the corresponding card
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
