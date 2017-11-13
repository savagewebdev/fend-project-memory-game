const cardsArray = [
    { name: "fa fa-diamond" }, // 1
    { name: "fa fa-paper-plane-o" }, // 2
    { name: "fa fa-anchor" }, // 3
    { name: "fa fa-bolt" }, // 4
    { name: "fa fa-cube" }, // 5
    { name: "fa fa-anchor" }, // 6 
    { name: "fa fa-leaf" }, // 7
    { name: "fa fa-bicycle" }, // 8
    { name: "fa fa-diamond" }, // 9
    { name: "fa fa-bomb" }, // 10
    { name: "fa fa-leaf" }, // 11
    { name: "fa fa-bomb" }, // 12
    { name: "fa fa-bolt" }, // 13
    { name: "fa fa-bicycle" }, // 14
    { name: "fa fa-paper-plane-o" }, // 15
    { name: "fa fa-cube" } // 16
];

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
        
        $.each(cardsArray, function(name, value) {
            let symBol = value.text();
            $(".card").attr("i", symBol());
        });
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


