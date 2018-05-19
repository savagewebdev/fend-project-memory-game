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

let Turn = []; // An empty array.

Memorygame.prototype.flip = function() {
    $(".card").on('click', function(event) {
        $(event.target).addClass(" open show"); 
        let Compare = $(event.target).children(':nth-child(1)');
//        console.log(event.target);
        Turn.push(Compare);
        // Memory counter should probably be increased at some point.  
        if (Turn.length === 1) { // If two turns have been tried....
        
            if (Turn[0] === Turn[1]) { // and the cards match...
        
                for (let i = Turn.length; i > 0; i--) { // Empty the array and continue.
                Turn.pop(); 
                }
            }
            
            else { // And if the cards do not match...
            
                for (let i = Turn.length; i > 0; i--) { // Empty the array and continue.
                let Erase = $(this).removeClass(" open show"); // Close the cards.
//                $("i").each(Erase);
//                Turn.pop(); // and empty the array.
                };
            }
                
//        else {
//            undefined; // If two cards haven't been tried, then don't do anything.
//            }
        }
    }
    
);
}


const Doover = function() {
    $(".restart").on('click', function() {
        $(".deck").empty();
        const x = new Memorygame();
        x.flip()
    });
}

Doover.prototype = Object.create(Memorygame.prototype);
Doover.prototype.constructor = Memorygame;






