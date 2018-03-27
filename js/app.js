const Memorygame = function() { // Object 
    
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

    const cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"]; // Array

    const Newcards = shuffle(cards).map(function callback (currentValue) { // Create a new shuffled array (map).
        const addCard = "<li class='card'><i class=" + '"' + currentValue + '"' + "</i></li>"; 
            $(".deck").append(addCard);    
    });  
    
    const obj = Object.create(Memorygame.prototype);
    return obj;
    
}

Memorygame.prototype.flip = function() {
    $(".card").on('click', function(event) {
        $(event.target).addClass(event.target + " open show");
    });
}

const Dover = function() {
    $(".restart").on('click', function() {
        $(".deck").empty();
        Memorygame.call(this);
    });
}

Dover.prototype = Object.create(Memorygame.prototype);
Dover.prototype.constructor = Memorygame;










