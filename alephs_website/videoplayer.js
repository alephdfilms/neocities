var embedvideo = document.getElementById("embed-video");
var selection = document.getElementById("selection");
var hr = "<hr>";
var br = "<br>";
var nbsp = "&nbsp;";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const videoid = urlParams.get('videoid');

var videotitle1 = "<strong>Sus-shine, my dear watson</strong>";
var videodesc1 = "<em>An old animation detailing the wonders of Lesley Gore... and Greeny Phatom. Yeah.</em>";
var videothumb1 = "<img src='pictures/thumbnails/susshine.jpg' width='32' height='32' alt='Lesley Gore and her visage.'>";
var videorelease1 = "Released August 2021.";
var video1id = "susshine2021";

var video1info = videothumb1 + videotitle1 + " - " + videodesc1 + br + videorelease1 + br + "<a href='?videoid=" + video1id + "'><button class='playit'>Play it.</button></a>";

selection.innerHTML = video1info + hr + "More coming soon.";

if (videoid === "susshine2021"){
embedvideo.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='100%' height='100%'><param name='movie' value='http://alephfiles.duckdns.org/susshine_og.swf' /><param name='LOOP' value='false' /><embed src='http://alephfiles.duckdns.org/susshine_og.swf' width='100%' height='100%' loop='false' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'></object>";
}
