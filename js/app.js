const cardsArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

function shuffle(cardsArray) { 
    let currentIndex = cardsArray.length, temporaryValue, randomIndex; 

    while (currentIndex !== 0) { // While there remain elements left to shuffle...
    
        randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element
        currentIndex -= 1;
        
        temporaryValue = cardsArray[currentIndex]; // And swap it with the current element
        cardsArray[currentIndex] = cardsArray[randomIndex];
        cardsArray[randomIndex] = temporaryValue;
    }
    return cardsArray;
}
    
const ShuffleMe = shuffle(cardsArray).map(function callback(currentValue) { 
    const addCard = "<li class='card'><i class=" + '"' + currentValue + '"' + "</i></li>"; 
    $(".deck").append(addCard);
    });

ShuffleMe;
    
$(".card").on('click', function(event) {
    $(event.target).addClass(event.target + " open show");
});

$(".restart").on('click', function() {
    $(".deck").empty();
});



