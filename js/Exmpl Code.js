//// Udacity Example code with my own commentary.
//
//const Card = function() {
//	$(".card").on('click', function(event) {
//		clickedCard(event.target); // Whenever a click is made, a card is made open to be shown via the function in lines 13-14.
//	});
//}
//
//let openCards = [];
//
//// An empty array which will contain the cards that will be used for matching.
//
//function clickedCard(card) {
//	card.classList.add('open', 'show'); // Flipped classes that will be added to the clicked card.
//	
////	A new function to modify the event target. It contains a parameter named card. The parameter has a class list added to containing both open and show to reveal a given card.
//
//	const i = card.firstChild; // The first child of the card is selected via a variable acting upon the above jquery.
//	let topCard; // A topCard variable is declared for scope purposes. Both cards have been declared as variables at this point.
//	
//	if (openCards.length == 0) { // A conditional statement. If the array is empty...
//		openCards.push(card); // then push the clicked, flipped card into the array.
//		console.log(openCards); // And display the array in the console. *** Odd one. Seems like boasting. ***
//
//	} else { // Otherwise, if the array isn't already empty, then do some evaluating:
//	
//		topCard = openCards.pop(); // topCard is thus defined as the array with the last element of the array removed.
//		if (topCard.firstChild.className === i.className) { // But if the topCard's classname matches that of the clicked card...
//			console.log('matched!'); // Then the console displays a match.
//		} else { // otherwise...
//			console.log('not match!'); // the console displays a mismatch...
//			setTimeout(() => { // and the following evaluation is made after a short delay...
//				topCard.classList.remove('open', 'show'); // ... turning the top card back over...
//				card.classList.remove('open', 'show'); // ... as well as the clicked card itself...
//				topCard.classList.add('close'); // ... by adding a close class
//				card.classList.add('close'); // ... to both cards apparently.
//			}, 1 * 1000); // All this being evaluated after 1000 miliseconds or 1 second.
//		}
//	}
//}