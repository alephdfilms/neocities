let artbook_selection = document.getElementById("artbook_selection");
let artbook_art_picture = document.getElementById("artbook_art_picture");
var latestbutton = "<button onClick='latest();'>&starf;</button>"
var artbook1 = "<a href='?art=atwcloth'>1</button>";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const art = urlParams.get('art');

function latest() {
artbook_art_picture.src = "images/art/atwcloth.png";
artbook_art_picture.height = "32";
}

artbook_art_picture.src = "images/art/" + art + ".png";

artbook_selection.innerHTML = latestbutton + artbook1;

artbook_art_picture.src = "images/art/" + art + ".png";
