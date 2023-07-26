//gitserv = http, neo = https
if(location.hostname == "aleph.is-local.org"){
  document.getElementById("gitserv").innerHTML = "<strong>HTTP</strong>";
  document.getElementById("gitserv").src = "#";
}
if(location.hostname == "alephd.neocities.org"){
  document.getElementById("neo").innerHTML = "<strong>HTTPS</strong>";
  document.getElementById("neo").src = "#";
}
