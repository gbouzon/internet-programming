//initializing variables

//to store nb of cards dealt for each
var playerIndex, dealerIndex;
playerIndex = dealerIndex = 0;

//to store scores
var dealerScore, playerScore;
dealerScore = playerScore = 0;

//to store cards already in the game
var generatedCards = []; 

/**
 * Generates two random cards for the player and two random cards for the dealer.
 * Updates scores and checks if anyone has won/lost the game yet (> or == 21).
 * @returns {void}
 */
function deal() {
    //deals player two random cards.
    createCardElement(generateRandomCard(), "player", ++playerIndex);
    createCardElement(generateRandomCard(), "player", ++playerIndex);

    //updating player score.
    playerScore += getCardValue(generatedCards[0]);
    playerScore += getCardValue(generatedCards[1]);
    document.getElementById("playerScore").innerHTML = "Score: " + playerScore + " points.";
    isScoreValid(playerScore);

    //deals dealer two random cards.
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);
    createCardElement(generateRandomCard(), "dealer", ++dealerIndex);

    //updating dealer score.
    dealerScore += getCardValue(generatedCards[2]);
    dealerScore += getCardValue(generatedCards[3]);
    document.getElementById("dealerScore").innerHTML = "Score: " + dealerScore + " points.";
    isScoreValid(dealerScore);
}

/** 
 * Generates a random card from a 52-card deck.
 * If the card has already been dealt, generate another one.
 * @param {number} min - the minimum value of the generated card.
 * @param {number} max - the maximum value of the generate card.
 * @returns the number corresponding to a card in the deck.
 */
function generateRandomCard(min = 1, max = 52) {
    var card = Math.floor((Math.random() * (max - min + 1)) + min);

    if (generatedCards.indexOf(card) < 0) {
        generatedCards.push(card); 
        return card;
    }

    return generateRandomCard();  
}

/** 
 * Creates an image element (where needed) and displays the corresponding card.
 * @param {number} card - the number generated from the 52-card deck.
 * @param {string} id - "player" or "dealer".
 * @param {number} index - number of cards dealt for specified player.
 * @returns {void}
 */
 function createCardElement(card, id, index) {
    if (index > 2) { 
        //creating a new image element to add next card.
        var newImg = document.createElement("img");
        //setting the img id to id + index (eg. player1, dealer1).
        newImg.setAttribute("id", id + index);
        //adding image to the page.
        document.getElementById(id + "Hand").appendChild(newImg);  
    }
    document.getElementById(id + index).setAttribute("src", "img/" + card + ".png");
}

/** 
 * Called when "Draw 1 more card" button is pressed.
 * Generates another card for the player and updates related functionalities.
 * @returns {void}
 */
function requestPlayerCard() {
    var card = generateRandomCard();
    createCardElement(card, "player", ++playerIndex);
    playerScore += getCardValue(card);
    //displayScore
    document.getElementById("playerScore").innerHTML = "Score: " + playerScore + " points.";
    isScoreValid(playerScore);
}

/** 
 * Disables buttons "draw 1 more card" and "hold".
 * @returns {void}
 */
function disableButtons() {
    document.getElementById("btnDraw").disabled = true;
    document.getElementById("btnHold").disabled = true;
}

/**
 * Called when button "hold" is pressed.
 * Generates another card for dealer while score <= 16 and updates related functionalities.
 * Once dealer has either reached 17+, lost or won, scores are compared.
 * @returns {void}
 */
function completeDealerHand() {
    disableButtons();
    var card = generateRandomCard();

    //continues generating cards until dealer's score reaches 17
    if (dealerScore <= 16) {
        createCardElement(card, "dealer", ++dealerIndex);
        dealerScore += getCardValue(card);
        document.getElementById("dealerScore").innerHTML = "Score: " + dealerScore + " points.";
        return completeDealerHand();
    }
    
    else if (dealerScore < 21) {
        generatedCards.pop(); //because it adds an extra card that never gets used, check line 109
        return compareScores();
    }

    generatedCards.pop(); //because it adds an extra card that never gets used, check line 109
    return isScoreValid(dealerScore);
}

/**
 * Compares scores and declares winner whoever has the score closer (but not above) 21.
 * Deals with ties in case one occurs.
 * @returns a win or a tie.
 */
function compareScores() {
    if ((21 - playerScore) < (21 - dealerScore))
        return win(playerScore);
    else if ((21 - dealerScore) < (21 - playerScore))
        return win(dealerScore);
    else return tie();
}

/**
 * Checks if the score is still valid (< 21).
 * @param {number} score - the score to be checked (either the player's or the dealer's).
 * @returns true if score < 21 and a lose/win if not.
 */
function isScoreValid(score) {
    if (score < 21) return true;
    else if (score > 21) return lose(score);
    else if (score == 21) return win(score);
}

/**
 * Checks which player has the winning score and updates related functionalities.
 * @param {number} score - the winning score to be checked (either the player's or the dealer's).
 * @returns {void}
 */
function win(score) {
    disableButtons();

    if (score == playerScore) {
        document.getElementById("playerLabel").innerHTML = " Player has won the game";
        //the green highlight was ugly so I changed the colour of the text instead.
        document.getElementById("playerLabel").style.color = "green"; 
    }
    else if (score == dealerScore) {
        document.getElementById("dealerLabel").innerHTML = " Dealer has won the game"; 
        document.getElementById("dealerLabel").style.color = "green"; 
    }
}

/**
 * Checks which player has the losing score.
 * @param {number} score - the losing score.
 * @returns a win for the player who doesn't have the losing score.
 */
 function lose(score) {
    if (score == playerScore)
        return win(dealerScore);
    else if (score == dealerScore)
        return win(playerScore);
}

/**
 * Removes all but one images from the specified HTML element.
 * @param {string} id - "player" or "dealer"
 * @param {number} index - number of cards dealt for specified player.
 * @returns {void}
 */
function removeImgs(id, index) {
    for (var i = index; i > 1; i--) 
        document.getElementById(id + i).remove();
}

/** 
 * Deals with ties.
 * Deletes all previous cards and generates one more for each player.
 * The player with the highest card (< 21) is the winner.
 * @returns compareScores() - checks which card is the highest.
 */
function tie() {
    //if the card generated is of the same value for both, this method will be called again
    //since there will be only one image element I don't need to go through this process again
    if (playerIndex && dealerIndex > 1) {
        //deleting all player's cards
        removeImgs("player", playerIndex);

        //deleting all dealer's cards
        removeImgs("dealer", dealerIndex);

        //setting index to 1, since each player only has one card now
        dealerIndex = playerIndex = 1;
    }
    
    //generate one more card for each 
    var playerCard = generateRandomCard();
    var dealerCard = generateRandomCard();

    //player
    document.getElementById("player1").setAttribute("src", "img/" + playerCard + ".png");
    playerScore = getCardValue(playerCard);
    document.getElementById("playerScore").innerHTML = "Score: " + playerScore + " points.";

    //dealer
    document.getElementById("dealer1").setAttribute("src", "img/" + dealerCard + ".png");
    dealerScore = getCardValue(dealerCard);
    document.getElementById("dealerScore").innerHTML = "Score: " + dealerScore + " points.";
  
    //check which card is closer to 21
    return compareScores();
}

/** 
 * Checks if a given card is a face card (J, Q, K).
 * @param {number} card - the number generated from the 52-card deck.
 * @returns true if the card is a J, Q or K. False if otherwise.
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

/** 
 * Retrieves the value of the corresponding card according to specific rules.
 * Aces: 11 points, Face cards: 10 points, others: corresponding number.
 * @param {number} card - the number generated from the 52-card deck.
 * @returns the integer value of the card.
 */
function getCardValue(card) {
    if ((card - 1) % 13 == 0) //aces 
        return 11;
    else if (isFaceCard(card)) //face cards
        return 10;
    else
        return (card % 13); //everything else
}