//Playlist array - Can use json here too
var songs = [
"./music/bensound-actionable.mp3",
"./music/bensound-ukulele.mp3",
"./music/bensound-cute.mp3"
];


// Current index of songs array
var current = 0;

//Get audio element
var songPlayer = document.querySelector("#playlist audio");

//function that is called at end of previous song
function next() {
	// Check if last song is the one playing
	if (current === songs.length -1) {
		current = 0;
	} else {
		current++;
	}

	//Change the audio source to next song
	songPlayer.src = songs[current];
}

//Check if the player is loaded in DOM
if (songPlayer === null) {
	throw "Song Player is not loaded ...";
} else {
	//Start the player
	songPlayer.src = songs[current];

	//Listen for the playback ended event, to play the next song
	songPlayer.addEventListener('ended', next, false)
}

// Create ul and li items for list
 var ul = document.createElement('ul');
		document.getElementById('song-list').appendChild(ul);
//Add songs to list
		songs.forEach(function(songs){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += songs;
		});



