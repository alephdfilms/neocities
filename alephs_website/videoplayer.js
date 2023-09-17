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

var video1info = videothumb1 + nbsp + "(Flash/Ruffle Required)" + videotitle1 + " - " + videodesc1 + br + videorelease1 + br + "<a href='?videoid=" + video1id + "'><button class='playit'>Play it.</button></a>";

var videotitle2 = "<strong>Dying be like...</strong>";
var videodesc2 = "<em>He didn't have a single idea, so he did some things.</em>";
var videothumb2 = "<img src='pictures/thumbnails/dying.jpg' width='32' height='32' alt='The guy.'>";
var videorelease2 = "Released August 2022.";
var video2id = "dyinglike";

var video2info = videothumb2 + nbsp + videotitle2 + " - " + videodesc2 + br + videorelease2 + br + "<a href='?videoid=" + video2id + "'><button class='playit'>Play it.</button></a>";

var videotitle3 = "<strong>The Flute Dance</strong>";
var videodesc3 = "<em>What would've been in an episode of Nightmare and Koopatroopaman, the worst web show idea I've ever made.</em>";
var videothumb3 = "<img src='pictures/thumbnails/harp.jpg' width='32' height='32' alt='Nightmare... er... Squirrel, staring at your soul... before commencing the ritual dance.'>";
var videorelease3 = "Released December 31st 2020.";
var video3id = "theyheightenedtheharp";

var video3info = videothumb3 + videotitle3 + " - " + videodesc3 + br + videorelease3 + br + "<a href='?videoid=" + video3id + "'><button class='playit'>Play it.</button></a>";

var videotitle4 = "<strong>Whipped Cream</strong>";
var videodesc4 = "<em>Million Champs Reanimated. With Auto Lipsync. It looks terrible, doesn't it?</em>";
var videothumb4 = "<img src='pictures/thumbnails/cream.jpg' width='32' height='32' alt='Jolly Rancher in Comic Sans.'>";
var videorelease4 = "Released September(?) 2021.";
var video4id = "whipcream";

var video4info = videothumb4 + videotitle4 + " - " + videodesc4 + br + videorelease4 + br + "<a href='?videoid=" + video4id + "'><button class='playit'>Play it.</button></a>";


selection.innerHTML = video2info + hr + video4info + hr + video1info + hr + video3info + hr + "More coming soon.";

if (videoid === "susshine2021"){
embedvideo.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='100%' height='100%'><param name='movie' value='http://alephfiles.duckdns.org/susshine_og.swf' /><param name='LOOP' value='false' /><embed src='http://alephfiles.duckdns.org/susshine_og.swf' width='100%' height='100%' loop='false' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'></object>";
}

if (videoid === "dyinglike"){
embedvideo.innerHTML = '<video preload="auto" width="100%" height="100%" id="videotag"> <source src="//alephfiles.duckdns.org/animationarchive/Dying_Be_Like.mp4" type="video/mp4">Your browser does not support the HTML5 video tag. If you are using Internet Explorer 6, then upgrade to Internet Explorer 9 now.</video>';
}

if (videoid === "theyheightenedtheharp"){
embedvideo.innerHTML = '<video preload="auto" width="100%" height="100%" id="videotag"> <source src="//alephfiles.duckdns.org/animationarchive/flutedanceanim.mp4" type="video/mp4">Your browser does not support the HTML5 video tag. If you are using Internet Explorer 6, then upgrade to Internet Explorer 9 now.</video>';
}

if (videoid === "whipcream"){
embedvideo.innerHTML = '<video preload="auto" width="100%" height="100%" id="videotag"> <source src="//alephfiles.duckdns.org/animationarchive/Whipped%20Cream.mp4" type="video/mp4">Your browser does not support the HTML5 video tag. If you are using Internet Explorer 6, then upgrade to Internet Explorer 9 now.</video>';
}
