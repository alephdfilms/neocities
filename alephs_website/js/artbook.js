let artbook_selection = document.getElementById("artbook_selection");
let artbook_art_picture = document.getElementById("artbook_art_picture");
var latestbutton = "<button onClick='latest();'>&starf;</button>"
var artbook1 = "<a href='#atwcloth'>1</button>";

function latest() {
artbook_art_picture.src = "images/blah_guy.svg";
artbook_art_picture.height = "32";
}
let hash = window.location.hash;
if (hash) {
  // Fragment exists
artbook_art_picture.src = "images/art/" + hash;
};

artbook_selection.innerHTML = latestbutton + artbook1;

latest();

artbook_art_picture.src = "images/art/" + hash;
