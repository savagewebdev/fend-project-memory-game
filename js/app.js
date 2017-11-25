const cardsArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

function shuffle(cardsArray) { 
    var currentIndex = cardsArray.length, temporaryValue, randomIndex; 

    while (currentIndex !== 0) { // While there remain elements left to shuffle...
    
        randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element
        currentIndex -= 1;
        
        temporaryValue = cardsArray[currentIndex]; // And swap it with the current element
        cardsArray[currentIndex] = cardsArray[randomIndex];
        cardsArray[randomIndex] = temporaryValue;
    }
    return cardsArray;
};

function cardsTable() { // Makes the cards from the Array and insert them into the deck.
    shuffle(cardsArray).map(function callback(currentValue, index, array) { 
    const cardMe = "<li class='card'><i class=" + '"' + currentValue + '"' + "</i></li>"; 
    $(".deck").append(cardMe); 
    });
};



$(".restart").on('click', function(event) {
    event.preventDefault();
    $(".deck").empty();
});

$(".card").on('click', function(event) { // When the card is clicked on...
        $(event.target).addClass(event.target + " open show");
    });
};



/*

Pseudoclassical Template:

*** The Masterclass ***

var Car = function(loc){ 
    this.loc = loc;
};

++ The car constructor ++

Car.prototype.move = function(){
    this.loc++;
};

*** The subclass ***

var Van = function(loc){ 
    this.loc = Car.move; 
};

++ The moving van constructor ++

Van.prototype.move = function() { 
    this.loc++;
};

-- The actual instantizations --

var zed = new Car(3); 
zed.move();

var amy = new Van(9);
amy.move();

*/


