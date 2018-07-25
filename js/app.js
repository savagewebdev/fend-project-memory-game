// The preliminary code for the randomization and array of the card game.

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

const openCards = []; // Empty array for the cards clicked upon.
const Timer = setInterval(countDown, 1000);


const Startingvalues = function() {
    this.Matches = 0; // The starting amount of successful card matches.
    this.Seconds = 0; // The timer starts at 0.

    this.moveCounter = 0; // The starting amount of moves taken.
            $(".moves").html("" + moveCounter + " Moves");
            
    this.startingStars = 3; // The starting amount of stars.
        for (var i = 0; i < this.startingStars; i++) {
            $(".stars").append("<li><i class='fa fa-star'></i></li>");
        }
}
    

function countDown() {
    Seconds++;
}
// Game functions

function Newcards() {
    shuffle(cards).map(function callback (currentValue) { // Create a new shuffled array (map).
    const addCard = "<li class='card'><i class=" + '"' + currentValue + '"' + "</i></li>"; 
        $(".deck").append(addCard);    
    });  
}

const Restart = function() { // Moves and matches don't reset, stars go away.
    $(".restart").on('click', function() {
        $(".deck").empty();
        $(".stars").empty();
        
        let x = new Newcards(); // Keep
        let y = new Card(); // Keep
        let z = new countDown(); // Keep
        let w = new Moves(); // Keep?
        
//        Matches = undefined;
//        Seconds = undefined;
//        moveCounter = undefined;
        
        
    });
}

function Moves() {
    moveCounter++;
    if (moveCounter === 1) {
        $(".moves").html("" + moveCounter + " Move");
    } else {
        $(".moves").html("" + moveCounter + " Moves");
    }
    
    if (moveCounter == 11) {
        $(".stars li:nth-child(1)").remove();
    } else {
    } if (moveCounter == 16) {
        $(".stars li:nth-child(2)").remove();
    }
}

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
        Moves();  
    }
    
    else { // If the first turn has been completed, then
        topCard = openCards.pop(); // the top card is taken and compared...
        
        if (topCard.firstChild.className === i.className) { // to the card that was recently clicked.
        Matches++;// it automatically remains open...  

        
        } else { // otherwise it closes within a certain timeframe.
            setTimeout(() => {
                topCard.classList.remove('open', 'show');
                card.classList.remove('open', 'show');
                topCard.classList.add('close');
                card.classList.add('close');
            }, 1 * 750);
        }
    }         
    
        if (Matches == 8) { // All the cards have been pushed to the open array...
            clearInterval(Timer); // clear the timer
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









