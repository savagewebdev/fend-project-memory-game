function clickedCard(card) { // (card) = event.target
	card.classList.add('open', 'show');
	const i = card.firstChild;
	let topCard;

	if (openCards.length == 0) { // If the openCards array is empty, then fill it with the active card that has been pushed.
		openCards.push(card);
		Moves();  
	}
	
	else { // If the first turn has been completed, then
		topCard = openCards.pop(); // the top card is taken and compared...
		
		if (topCard.firstChild.className === i.className) { // to the card that was recently clicked.
		Matches++;// it automatically remains open...  

		
		} else { // otherwise it closes within a certain timeframe.
			setTimeout(() => {
				topCard.classList.remove('open', 'show');
				card.classList.remove('open', 'show');
				topCard.classList.add('close');
				card.classList.add('close');
			}, 1 * 750);
		}
	}         
	
	if (Matches == 8) { // All the cards have been pushed to the open array...
		clearInterval(Timer); // clear the timer
		let txt;
		let totalStars = $(".stars li").length;
		let Message = confirm("You've won! It only took you " + moveCounter + " turns, " + Seconds + " seconds, and you earned a star rating of " + totalStars + ". Play again?");
		if (Message == true) {
			txt = "You pressed OK!";
		} else {
			txt = "You pressed Cancel!";
		}
	}
	else {
	}
}

// Starting Values


// Convert values to be usable?






