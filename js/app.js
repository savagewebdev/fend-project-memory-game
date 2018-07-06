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

let openCards = []; 
let moveCounter = 0;

const Doover = function() {
$(".restart").on('click', function() {
    $(".deck").empty();
    let x = new Newcards();
    let y = new Card();
    let z = new countDown();
});
}

function Moves() {
    moveCounter++;
    if (moveCounter === 1) {
        $("span.moves").html("" + moveCounter + " Move");
        countDown();
    } else {
        $("span.moves").html("" + moveCounter + " Moves");
    }
}

function Stars() {
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

// First Turn

    if (openCards.length == 0) { // If the openCards array is empty, then fill it with the active card that has been pushed.
        openCards.push(card);
        Moves();  
        Stars();
    }
    
    else if (openCards.length == 16) { // All the cards have been pushed to the open array...
        clearInterval(Timer); // clear the timer
        let txt;
        let Message = confirm("You've won! It only took you" + moveCounter + " turns and" + i + " seconds and you earned a star rating of " + $('.stars ul li').length + " Play again?");
        if (Message == true) {
            txt = "You pressed OK!";
        } else {
            txt = "You pressed Cancel!";
        }
    }
    
// End of First Turn
    
    else { // If the first turn has been completed, then
        topCard = openCards.pop(); // the top card is taken and compared...
        if (topCard.firstChild.className === i.className) { // to the card that was recently clicked.
        // it automatically remains open...
        } else { // otherwise it closes within a certain timeframe.
            setTimeout(() => {
                topCard.classList.remove('open', 'show');
                card.classList.remove('open', 'show');
                topCard.classList.add('close');
                card.classList.add('close');
            }, 1 * 750);
        }  
    }

}

let i = 0;

const Timer = setInterval(countDown, 1000);

function countDown() {
    i++;
    console.log(i);
}





