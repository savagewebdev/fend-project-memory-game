const cardsArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

$.each(cardsArray, function(name, value) {
    let symBol = this.text();
    $(".card").attr("i", symBol());
});

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

function randomize() {
    $(".restart").on('click', 'i', function(event) {
    	event.preventDefault(); 
        shuffle(cardsArray);
        
        
    });
    return randomize();
}

$(".card").on('click', function(Event) {  //event listener code
    $(event.target).attr('i', " " + "open show");
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




// Get something going that displays the cards within the memory game, so that the remaining portion can be effectively hacked.



//function displayCards() { 
//    const countDown = cardsArray.length;
//    for (let i = 0; i < countDown; i++) { 
//        let text.cardsArray[i];
//    
//    
//    
//     text = $(this).text ( );   
//    
//     $(this).text(text + “ “ + number); 
//    
//     $(‘p’).each(numberAdder);
//    
    

        // do something that pertains to each iteration within (myArray[i]);
//         $(".card).on;


