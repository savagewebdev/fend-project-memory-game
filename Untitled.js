const turn = [];
const openCards = []; 

$(".card").on('click', function(event) {
	Test(event.target);
});

function Turn(click) {
	this.click = click;
}

Turn.prototype.incr = function() {
	this.click++; // Increment the amount of turns you've taken.
	// Flip card over.
	// Insert card into array[].
}

Turn.prototype.rulz = function() {
	
	if (Turn.click == 2) {
		// 
		// Match the two cards and restart Turn.click.
		// Increase moves 
	}
	
}


function Test(card) {
	card.classList.add('open', 'show');
	turn.push(card);
	
}