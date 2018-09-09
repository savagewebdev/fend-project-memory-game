function shuffle(array) { 
    let currentIndex = array.length, temporaryValue, randomIndex; 

    while (currentIndex !== 0) { 
    
        randomIndex = Math.floor(Math.random() * currentIndex); 
        currentIndex -= 1;
        
        temporaryValue = array[currentIndex]; 
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

const openCards = []; 
const Timer = setInterval(Seconds, 1000); // Timer logic entry.

function Seconds() { 
    Zero1.integer++;
}

const Zero = function(integer) {
    this.integer = integer;
}

const Card = function() {
    $(".card").on('click', function(event) {
        clickedCard(event.target);
    });
}

function clickedCard(card) { 

    card.classList.add('open', 'show');
    const i = card.firstChild;
    let topCard;

    if (openCards.length == 0) { 
        openCards.push(card);
        Moves1.add()
        Moves1.rulez();  
    }
    
    else { 
        topCard = openCards.pop(); 
        if (topCard.firstChild.className === i.className) { 
        Match1.match(); 
        } else { 
            setTimeout(() => {
                topCard.classList.remove('open', 'show');
                card.classList.remove('open', 'show');
                topCard.classList.add('close');
                card.classList.add('close');
            }, 1 * 750);
        }
    }         
        if (Match1.matches == 8) {
            clearInterval(Timer);
            let txt;
            let totalStars = $(".stars li").length;
            setTimeout(() => {
                let Message = confirm("You've won! It only took you " + Moves1.moveCounter + " turns, " + Zero1.integer + " seconds, and you earned a star rating of " + totalStars + ". Play again?");
                if (Message == true) {
                    txt = new Delete();
                } else {
                    txt = "You pressed Cancel!";
                }
            }, 1 * 500);
        }
        else {
        }
}

const Moves = function(moveCounter) { 
    this.moveCounter = moveCounter;
}

Moves.prototype.add = function() { 
    this.moveCounter++;
}

Moves.prototype.rulez = function() { 
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

const Match = function(matches) { 
    this.matches = matches; 
}

Match.prototype.match = function() { 
    this.matches++;
}

const Stars = function(startingStars) {
    for (let i = 0; i < startingStars; i++) {
            $(".stars").append("<li><i class='fa fa-star'></i></li>");
        }
}

function Delete() { 
    delete Match1.matches; 
    delete Moves1.moveCounter;
    delete Zero1.integer;
    $(".stars").empty()
    $(".deck").empty();
    Loader();
}

$(".restart").on('click', function() {
    let x = new Delete(); 
    Loader();

});

function Loader() {
    let w = new Newcards(); 
    let y = new Card(); 
    let z = setInterval(Seconds, 1000);

Moves1.moveCounter = 0; 
Moves1.rulez(); 
Match1.matches = 0;
Zero1.integer = 0;
Stars(3);

}


