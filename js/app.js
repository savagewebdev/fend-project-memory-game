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

const Doover = function() {
$(".restart").on('click', function() {
    $(".deck").empty();
    let x = new Newcards();
    let y = new Card();
    let z = new countDown();
});
}

let openCards = []; 
let moveCounter = 0;

function Moves() {
    moveCounter++;
    if (moveCounter === 1) {
        $("span.moves").html("" + moveCounter + " Move");
    } else {
        $("span.moves").html("" + moveCounter + " Moves");
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
    }
    
// End of First Turn
    
    else {
        topCard = openCards.pop();
        if (topCard.firstChild.className === i.className) {
            // check if wins here
            
        } else {
            setTimeout(() => {
                topCard.classList.remove('open', 'show');
                card.classList.remove('open', 'show');
                topCard.classList.add('close');
                card.classList.add('close');
            }, 1 * 1000);
        }  
    }
}

let i = 0;

const Timer = setInterval(countDown, 1000);

function countDown() {
    i++;
    console.log(i);
}

// Stars


// Moves




