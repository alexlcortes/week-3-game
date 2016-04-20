var wins = 0;
		var loses = 0;
		var chances = 10;
		var guesses = [];

		function randomString() {
			var chars = "abcdefghiklmnopqrstuvwxyz";
			var string_length = 1;
			var randomstring = '';
			for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
			console.log(randomstring);
		}


		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
			guesses.push(userGuess);
			console.log(guesses);

			if (userGuess == randomstring) {
				alert("You read my mind...")
				wins ++;
				chances = 10;
				guesses = [];
				randomString();
			} else if (chances > 0) {
				console.log("Nice try.")
				chances --;
			} else if (chances < 1) {
				alert("Game over.")
				loses ++;
				chances = 10;
				guesses = [];
				randomString();
			}

	document.getElementById("wins").innerHTML = "Wins = " + wins;
	document.getElementById("loses").innerHTML = "Loses = " + loses;
	document.getElementById("chances").innerHTML = "Chances Left = " + chances;
	document.getElementById("guesses").innerHTML = "Your Guesses So Far = " + guesses;
	}
}


randomString();