let pagename = window.location.pathname;
//gitserv = http, neo = https
if(location.hostname == "aleph.is-local.org"){
  document.getElementById("gitserv").innerHTML = "<strong>HTTP</strong>";
  document.getElementById("gitserv").href = "#";
  document.getElementById("neo").innerHTML = "<strong>HTTPS</strong>";
  document.getElementById("neo").href = "http://alephd.neocities.org/" + pagename;
}
if(location.hostname == "alephd.neocities.org"){
  document.getElementById("gitserv").innerHTML = "<strong>HTTP</strong>";
  document.getElementById("gitserv").href = "http://aleph.is-local.org/" + pagename;
  document.getElementById("neo").innerHTML = "<strong>HTTPS</strong>";
  document.getElementById("neo").href = "#";
}
