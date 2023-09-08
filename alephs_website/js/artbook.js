let artbook_selection = document.getElementById("artbook_selection");
let artbook_art_picture = document.getElementById("artbook_art_picture");
var latestbutton = "<button onClick='latest();'>&starf;</button>"
var artbook1 = "<button onClick='chooseart('atwcloth.png');'>&starf;</button>";
function latest() {
artbook_art_picture.src = "images/art/atwcloth.png";
}
function chooseart(img) {
artbook_art_picture.src = "images/art/" + img;
}
artbook_selection.innerHTML = latestbutton + artbook1;
