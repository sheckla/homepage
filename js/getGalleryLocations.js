/*
*	Author: Daniel Graf 26.06.2020
*	Funktion: Erfasst dynamisch die Namen, Texte, sowie Preise der Anzeigen auf der Gallery (index.html)
*/

//Anzahl der Bilder in der Gallery (index.html)
var galleryCount = 5;

var locations = [];
locations.length = galleryCount;

var locationsText = [];
locations.length = galleryCount;

var locationsPrice = [];
locations.length = galleryCount;

for (var i = 0; i <= 4; i++) {{
	locations[i] = document.getElementById("reiseName" + i).innerHTML;
	locationsText[i] = document.getElementById("reiseText" + i).innerHTML;
	locationsPrice[i] = document.getElementById("reisePreis" + i).innerHTML;
}}

localStorage.setItem("locations",  JSON.stringify(locations));
localStorage.setItem("locationsText", JSON.stringify(locationsText));
localStorage.setItem("locationsPrice", JSON.stringify(locationsPrice));
