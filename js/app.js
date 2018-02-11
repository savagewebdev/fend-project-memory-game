const Cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];


Cards.prototype.shuffle = function (Cards) { 
    let currentIndex = Cards.length, temporaryValue, randomIndex; 

    while (currentIndex !== 0) { // While there remain elements left to shuffle...
    
        randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element
        currentIndex -= 1;
        
        temporaryValue = Cards[currentIndex]; // And swap it with the current element
        Cards[currentIndex] = Cards[randomIndex];
        Cards[randomIndex] = temporaryValue;
    }
    return cardsArray;
}
    
Cards.prototype.flip = Shuffle(Cards).map = function callback(currentValue) { 
    const addCard = "<li class='card'><i class=" + '"' + currentValue + '"' + "</i></li>"; 
    $(".deck").append(addCard);
    };
    
$(".card").on('click', function(event) {
    $(event.target).addClass(event.target + " open show");
});

//$(".restart").on('click', function() {
//    $(".deck").empty();
//});



