/*
*	Author: Daniel Graf 26.06.2020
*	Funktion: 	Placeholder-Elemente werden auf der "reise.html" passend durch das Suchergebnis ersetzt
*				Funktioniert dynamisch mit den Elementen der Gallery(index.html) und Navbar-Suchleisten(alle .html außer reise.html, [Enter-Taste unterstützt])
*	[Erweiterung zu search.js]
*/

//Diese Variable bestimmt die Anzahl der Suchergebnisse. (Es müssen auch dementsprechende Platzhalter in reise.html vorhanden sein!)
var catalogSearchAmount = 3;

var result = document.getElementById("result");
locations = JSON.parse(localStorage.getItem("locations") || "[]");
locationsText = JSON.parse(localStorage.getItem("locationsText") || "[]");
locationsPrice = JSON.parse(localStorage.getItem("locationsPrice") || "[]");

//Bilder-Listen der Gallery(index.html) oder dem Datenbank-katalog (./img/reisen/catalog)
var galleryImgArray = new Array();
var catalogImgArray = new Array();
for (var i = 0; i <= 4; i++) {
	galleryImgArray[i] = "./img/reisen/" + i + ".jpg";
	catalogImgArray[i] = "./img/reisen/catalog/" + i + ".jpg";
}

if (localStorage.getItem("search") != "") {
	result.innerHTML = localStorage.getItem("search");
	document.getElementById("searchBox").className = localStorage.getItem("hide");
	firstResult();
	otherResults(catalogSearchAmount);
} else {
	document.getElementById("searchBox").className = "hide";
	document.getElementById("search").focus();
}

//Erstes Suchergebnis - je nach Sucheingabe
function firstResult() {
 	document.getElementById("anzeige0").className = "";

 	var title = document.getElementById("title0");
 	var text = document.getElementById("text0")
 	var price = document.getElementById("price0")

 	title.innerHTML = localStorage.getItem("search");
 	text.innerHTML = locationsText[localStorage.getItem("galleryIndex")];
 	price.innerHTML = locationsPrice[localStorage.getItem("galleryIndex")];
 	document.getElementById("img0").src = galleryImgArray[localStorage.getItem("galleryIndex")];
 }

//Restliche zufällige Suchergebnisse
function otherResults(amount) {
	for (var i = 1; i <= amount; i++) {
		document.getElementById("anzeige" + i).className = "";
		var title = document.getElementById("title" + i);
	 	var text = document.getElementById("text" + i);
	 	var price = document.getElementById("price" + i);

	 	title.innerHTML = "Eine Wunderschöne Reise";
	 	text.innerHTML = "Ein wunderschöner Text zu einer bezaubernden Reise. " + 
	 	"Hier Stehen außerdem weitere Informationen bezüglich der Reise wie z. B. die Anzahl der Personen, Tage etc.";
	 	price.innerHTML = (randomNumber(700) + 300) + "€";
	 	document.getElementById("img" + i).src = catalogImgArray[i-1];
	}
}

function randomNumber(max) {
    var random = Math.floor(Math.random() * max);
    return random;
}