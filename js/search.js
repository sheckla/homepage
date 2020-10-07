/*
*	Author: Daniel Graf 26.06.2020
*	Funktion: 	Suchleistennavigation sowie Ergebnisanzeige im entsprechendem <div> von reise.html
*				Anzeige von Reiseangeboten je nach Sucheingabe:	
*					[In dieser Variante jedoch zufallsbasiert, abgesehen von den Angeboten der Startseite]
*					[echte Angebote können einfach Implementiert werden und gegebenenfalls mit einer echten Datenbank verknüpft werden]
*/

/*	localStorage Variabeln:
*	"search" = Suchergebniss [Durch Sucheingabe oder Anklickens des Preises auf "index.html"]
*	"hide" = Determinante, ob <div> mit den Suchergebniss angezeigt wird
*	"galleryIndex" = Nummer des Angeklickten Bildes der Gallery(index.html)
*	"locations" = Reiseziele der Gallery (index.html)
*	"locationsText" = zugehöriger Reisetext von "locations"
*	"locationsPrice" = zugehörige Preise von "locations"
*/

//Enter-Taste input (keyCode 13 = Enter-Taste)
let input = document.querySelector("input");
input.addEventListener("keyup", (e) => {
	if (e.keyCode == 13) {
		formSubmitLink(e);
		console.log("ENTER");
	}
})

console.log(localStorage.getItem("locations"));
console.log(localStorage.getItem("locationsText"));
console.log(localStorage.getItem("locationsPrice"));
locations = JSON.parse(localStorage.getItem("locations") || "[]");
console.log(locations);

//Submit für: alle Seiten außer reise.html
function formSubmitLink(searchedByClick) {
	document.location.href = "reise.html";
	var search = document.getElementById("search").value;
	localStorage.setItem("search",search);
	localStorage.setItem("hide","");

	if (searchedByClick >= 0 && searchedByClick < 5) {
		localStorage.setItem("search",locations[searchedByClick]);
		localStorage.setItem("galleryIndex",searchedByClick);
	}

	setFocusToSearch();
}

//-----Ab hier geltend nur für reise.html-----
function formSubmit(e) {
 	var search = document.getElementById("search").value;

 	if (search == "") {
 		console.log("searchEmpty");

 		localStorage.setItem("search","");

 		displayError();
 	} else {
 		formSubmitLink();
 	}

 }

 function reset(){
 	localStorage.setItem("search","");
	localStorage.setItem("hide","hide");
	document.getElementById("search").value = "";
	document.getElementById("searchBox").className = localStorage.getItem("hide");
	document.getElementById("search").className = "uk-search-input";

	for (var i = 0; i <= catalogSearchAmount; i++) {
		document.getElementById("anzeige" + i).className = "hide";
	}
 }

 //----------

 function setFocusToSearch(){
 	console.log("focusToSearch");
    document.getElementById("search").focus();
}

function displayError() {
		//Searchbar "shake" Effekt
 		var previousSearchBarClassName = document.getElementById("searchBar").className;
 		document.getElementById("searchBar").className += " uk-animation-shake";
 		
 		//Rotes Highlighten des Search bars
 		document.getElementById("search").className += " search-empty";
 		previousSearchInputBoxName = document.getElementById("search").className;

 		setTimeout(() => {
 			document.getElementById("searchBar").className = previousSearchBarClassName;
 		}, 500);
}