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

let openedCards = []; // An empty array.

Memorygame.prototype.flip = function() {
    $(".card").on('click', function(event) {
        clickedCard(event.target); 
    });
}

function clickedCard(card) { // Customization begins shortly. Invert prototypes/variable seems to be the best option.
    card.classList.add('open', 'show');
	const i = card.firstChild;
	let topCard; 

    if (openCards.length == 0) { 
		openCards.push(card);
		console.log(openCards);

    } else { 
		topCard = openCards.pop();
		if (topCard.firstChild.className === i.className) { 
            console.log('matched!');
        } else { 
			console.log('not match!'); 
			setTimeout(() => { 
				topCard.classList.remove('open', 'show'); 
				card.classList.remove('open', 'show');
				topCard.classList.add('close');
				card.classList.add('close'); 
			}, 1 * 1000); 
        }
    }
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






