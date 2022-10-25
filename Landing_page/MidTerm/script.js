const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter");
xhr.setRequestHeader("X-RapidAPI-Key", "a881374ca7mshde7a19e80e86fdfp1b7ec7jsnb2cce2eff87d");
xhr.setRequestHeader("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");

xhr.send(data);