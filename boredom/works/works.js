window.onload = (event) => {
resizeto(550, 1000); //of course, this only happens if the page is in a window
var content = document.getElementById("content");
var client_screenshot = document.getElementById("client_screenshot");
var client_name = document.getElementById("client_name");
var client_info = document.getElementById("client_info");
var client_years = document.getElementById("client_misc");
};
function getclient(client, section) {
    if (client != null) {
    // do nothing
    }
    if (client === "berjones" && section === "websites") {
    client_screenshot.innerHTML = "<a href='../images/work/berjones.jpg' target='_blank'><img src='../images/work/berjones.jpg' width='32' height='24' alt='berjones.neocities.org screenshot. click to enhance.' title='click to enhance.'></a>";
    client_name.innerHTML = "<a href='https://berjones.neocities.org' target='_blank'>the [berjones] website</a>";
    client_info.innerHTML = "<p>Unsurprisingly, [berjones] is a client on all sections.<br>[berjones] is my friend Berayah Jones's website. For my first web design project for someone who isn't me, it's actually better maintained than <em>MY</em> website! The site is rather simple to markup, though, since it's just a bunch of links n' shit. Maybe that'll change when Berayah makes a game. Maybe not. Who knows?</p>";
    client_misc.innerHTML = "<p><strong>Timeframe:</strong> August 3rd, 2023&ndash;September 31st, 2023<br><strong></p> <p><strong>Webmaster:</strong> Aleph Diallo</p> <p><strong>Art and Animation:</strong> Berayah Jones, Aleph Diallo</p>";
    }
}
