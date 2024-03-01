var mainheader = document.getElementById("main-header");

var weblogo = "<p><!--Website's logo--><!--Do you think it rips off the [as] one? I do.--><a href='#main' title='Skip navigation' alt='Skip navigation'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/logos/alephswebsite.png' id='alephs website logo'></a></p>"

var button1 = "<a href='" + "http://" + window.location.hostname + "/neocities/alephs_website'><button class='navbuttons' id='nav-home'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/home.png' alt='A HOME'><br> HOME</button></a>";
var button2 = "<a href='" + "http://" + window.location.hostname + "/neocities/alephs_website/videoplayer'><button class='navbuttons' id='nav-videos'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/movie.png' alt='FILMSTRIP'><br>VIDEOS</button></a>";
var button3 = "<a href='" + "http://" + window.location.hostname + "/neocities/alephs_website/games'><button class='navbuttons' id='nav-games'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/joystick.png' alt='JOYSTICK'><br>GAMES</button></a>";
var button4 = "<a href='" + "http://" + window.location.hostname + "/neocities/alephs_website/art'><button class='navbuttons' id='nav-art'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/brush.png' alt='BRUSH'><br>THE ARTS</button></a>";
var button5 = "<a href='" + "http://" + window.location.hostname + "/neocities/alephs_website/goodies'><button class='navbuttons' id='nav-goodies'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/download.png' alt='DOWNLOAD ICON'><br>GOODIES</button></a>";
var button6 = "<a href='mailto:aleph@rubberocket.com'><button class='navbuttons' id='nav-email'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/atsign.png' alt='@'><br>EMAIL</button></a>";
var button7 = "<a href='" + "http://" + window.location.hostname + "/neocities/alephs_website/rss.xml'><button class='navbuttons' id='nav-rss'><img src='" + "http://" + window.location.hostname + "/neocities/alephs_website/icons/buttons/rss.png' alt='RSS ICON'><br>RSS</button></a>";

mainheader.innerHTML = weblogo + "<p>" + button1 + button2 + button3 + button4 + button5 + button6 + button7 + "</p>";
