function shuffle(array) { // Randomization of array
    let currentIndex = array.length, temporaryValue, randomIndex; 

    while (currentIndex !== 0) { // While there remain elements left to shuffle...
    
        randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element
        currentIndex -= 1;
        
        temporaryValue = array[currentIndex]; // And swap it with the current element
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

const cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"]; 

function Newcards() {
    shuffle(cards).map(function callback (currentValue) { // Create a new shuffled array (map).
    const addCard = "<li class='card'><i class=" + '"' + currentValue + '"' + "</i></li>"; 
        $(".deck").append(addCard);  
    });  
}

const openCards = []; // Empty array for the cards clicked upon.

// Do you have the time? #GreenDay

const Timer = setInterval(Seconds, 1000); // Timer logic entry.

function Seconds() { // Zero.cero method should call second integer.
    Zero1.integer++;
}

const Zero = function(integer) {
    this.integer = integer;
}

let Zero1 = new Zero(0);
//let cero = Zero1.integer;




// Card selection and functionality

const Card = function() {
    $(".card").on('click', function(event) {
        clickedCard(event.target);
    });
}

function clickedCard(card) { // (card) = event.target

    card.classList.add('open', 'show');
    const i = card.firstChild;
    let topCard;

    if (openCards.length == 0) { // If the openCards array is empty, then fill it with the active card that has been pushed.
        openCards.push(card);
        Moves1.add();  
    }
    
    else { // If the first turn has been completed, then
        topCard = openCards.pop(); // the top card is taken and compared...
        
        if (topCard.firstChild.className === i.className) { // to the card that was recently clicked.
        Match1.match();// it automatically remains open...  

        } else { // otherwise it closes within a certain timeframe.
            setTimeout(() => {
                topCard.classList.remove('open', 'show');
                card.classList.remove('open', 'show');
                topCard.classList.add('close');
                card.classList.add('close');
            }, 1 * 750);
        }
    }         
        if (Match1.Matches == 8) { // All the cards have been pushed to the open array...
            clearInterval(Timer); // clear the timer
//            Timer = 0;
            let txt;
            let totalStars = $(".stars li").length;
            setTimeout(() => {
                let Message = confirm("You've won! It only took you " + moveCounter + " turns, " + Seconds + " seconds, and you earned a star rating of " + totalStars + ". Play again?");
                if (Message == true) {
                    txt = new Restart();
                } else {
                    txt = "You pressed Cancel!";
                }
            }, 1 * 500);
        }
        else {
        }
}

// Moves

const Moves = function(moveCounter) {
    this.moveCounter = moveCounter;
    if (this.moveCounter === 0) {
    $(".moves").html("" + this.moveCounter + " Moves");
    }
}

Moves.prototype.add = function() { 
    this.moveCounter++;
    if (this.moveCounter === 1) {
        $(".moves").html("" + this.moveCounter + " Move");
    } else {
        $(".moves").html("" + this.moveCounter + " Moves");
    }

    if (this.moveCounter == 11) {
        $(".stars li:nth-child(1)").remove();
    } else {
    } if (this.moveCounter == 16) {
        $(".stars li:nth-child(2)").remove();
    }
    
}

// Match

const Match = function(Matches) { // A constructor function produces difference because of what passses through 
    this.Matches = Matches; // to a new function.
}

Match.prototype.match = function() { // The prototype function is similar because, when used, it does the same to all.
    this.Matches++;
}

// Stars

const Stars = function(startingStars) {
    this.startingStars = startingStars;
    for (var i = 0; i < startingStars; i++) {
            $(".stars").append("<li><i class='fa fa-star'></i></li>");
        }
}

// Reset Game

const Restart = function() { // Moves and matches don't reset, stars go away.
    $(".restart").on('click', function() {
        $(".deck").empty();
        $(".stars").empty();
        
        let x = new Newcards();


    }
)}