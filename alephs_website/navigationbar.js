var mainheader = document.getElementById("main-header");

var weblogo = "<p><!--Website's logo--><!--Do you think it rips off the [as] one? I do.--><a href='#main' title='Skip navigation' alt='Skip navigation'><img src='/logos/alephswebsite.png' id='alephs website logo'></a></p>"

var button1 = "<a href='/index.html'><button class='navbuttons' id='nav-home'><img src='/icons/buttons/home.png' alt='A HOME'><br> HOME</button></a>";
var button2 = "<a href='/videoplayer.html'><button class='navbuttons' id='nav-videos'><img src='/icons/buttons/movie.png' alt='FILMSTRIP'><br>VIDEOS</button></a>";
var button3 = "<a href='/games.html'><button class='navbuttons' id='nav-games'><img src='/icons/buttons/joystick.png' alt='JOYSTICK'><br>GAMES</button></a>";
var button4 = "<a href='/art.html'><button class='navbuttons' id='nav-art'><img src='/icons/buttons/brush.png' alt='BRUSH'><br>THE ARTS</button></a>";
var button5 = "<a href='/goodies.html'><button class='navbuttons' id='nav-goodies'><img src='/icons/buttons/download.png' alt='DOWNLOAD ICON'><br>GOODIES</button></a>";
var button6 = "<a href='mailto:alephdiallo@mail.com'><button class='navbuttons' id='nav-email'><img src='/icons/buttons/atsign.png' alt='@'><br>EMAIL</button></a>";
var button7 = "<a href='/rss.xml'><button class='navbuttons' id='nav-rss'><img src='/icons/buttons/rss.png' alt='RSS ICON'><br>RSS</button></a>";

mainheader.innerHTML = weblogo + "<p>" + button1 + button2 + button3 + button4 + button5 + button6 + button7 + "</p>";
