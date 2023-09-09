//get ids
let artbook_selection = document.getElementById("artbook_selection");
let artbook_art_picture = document.getElementById("artbook_art_picture");
//add buttons
var latestbutton = "<button onClick='latest();'>&starf;</button>"
var artbook1 = "<a href='?art=atwcloth'>1</button>";
//add params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const art = urlParams.get('art');


function latest() {
//the latest and greatest
artbook_art_picture.src = "images/art/atwcloth.png";
}

//set the params if needed

artbook_art_picture.src = "images/art/" + art + ".png";

artbook_selection.innerHTML = latestbutton + artbook1;

artbook_art_picture.src = "images/art/" + art + ".png";
