//get ids
let artbook_selection = document.getElementById("artbook_selection");
let artbook_art_picture = document.getElementById("artbook_art_picture");
//add buttons
var latestbutton = "<button onClick='latest();'>&starf;</button> | "
var artbook1 = "<a href='?art=atwcloth.png'>1</a> ";
var artbook2 = "<a href='?art=Untitled24.png'>2</a> ";
var artbook3 = "<a href='?art=16bit.png'>3</a> ";
var artbook4 = "<a href='?art=256.png'>4</a> ";
//add params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const art = urlParams.get('art');


function latest() {
//the latest and greatest
artbook_art_picture.src = "images/art/256.png";
}

let url = window.location.href;
if(url.includes('?')){
  artbook_art_picture.src = "images/art/" + art;
}else{
  artbook_art_picture.src = "images/blah_guy.svg";
  artbook_art_picture.width = 128;
  artbook_art_picture.height = 128;
}

artbook_selection.innerHTML = latestbutton + artbook1 + artbook2 + artbook3 + artbook4;
