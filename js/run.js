Newcards(); // Shuffle of cards

let Match1 = new Match(0); // Works
Match1.prototype = Object.create(Match.prototype);

let Moves1 = new Moves(0); // Works minus initial count.
Moves1.prototype = Object.create(Moves.prototype);

let Stars1 = new Stars(3); // Works
//let Seconds = 0;

//let Seconds1 = new Countdown(0);
//Seconds1.prototype = Object.create(Countdown.prototype);

Card(); // Enact functionality of game
Restart(); // Restart the game



// Test of starting values




