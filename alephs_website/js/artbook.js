let artbook_selection = document.getElementById("artbook_selection");
let artbook_art_picture = document.getElementById("artbook_art_picture");
var latestbutton = "<button onClick='latest();'>&starf;</button>"
var artbook1 = "<a href='?art=atwcloth'>1</button>";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const art = urlParams.get('art');

function latest() {
artbook_art_picture.src = "images/blah_guy.svg";
artbook_art_picture.height = "32";
}
if (hash) {
  // Fragment exists
artbook_art_picture.src = "images/art/" + art;
};

artbook_selection.innerHTML = latestbutton + artbook1;

latest();

artbook_art_picture.src = "images/art/" + hash;
