const cardsArray = [
    { symbol: "diamond", name: "fa fa-diamond" }, // 1
    { symbol: "paper-plane-o", name: "fa fa-paper-plane-o" }, // 2
    { symbol: "anchor", name: "fa fa-anchor" }, // 3
    { symbol: "bolt", name: "fa fa-bolt" }, // 4
    { symbol: "cube", name: "fa fa-cube" }, // 5
    { symbol: "anchor", name: "fa fa-anchor" }, // 6 
    { symbol: "leaf", name: "fa fa-leaf" }, // 7
    { symbol: "bicycle", name: "fa fa-bicycle" }, // 8
    { symbol: "diamond", name: "fa fa-diamond" }, // 9
    { symbol: "bomb", name: "fa fa-bomb" }, // 10
    { symbol: "leaf", name: "fa fa-leaf" }, // 11
    { symbol: "bomb", name: "fa fa-bomb" }, // 12
    { symbol: "bolt", name: "fa fa-bolt" }, // 13
    { symbol: "bicycle", name: "fa fa-bicycle" }, // 14
    { symbol: "paper-plane-o", name: "fa fa-paper-plane-o" }, // 15
    { symbol: "cube", name: "fa fa-cube" } // 16
];

function randomize() {
    $(".restart").on('click', 'i', function(event) {
        
    })
}

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
}

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




//

function displayCards() { 
    for (let i = 0; i < cardsArray[]; i++) { 
        
        
        
    }
}

$(".card").on('click', 'li', function(Event) {
    $(event.target)
}); 

