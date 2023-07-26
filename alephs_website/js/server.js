//gitserv = http, neo = https
let httplink = document.getElementById("gitserv");
let httpslink = document.getElementById("neo");
if(location.hostname == "aleph.is-local.org"){
  if (window.location.protocol == 'https:') {
      
    console.log("you are accessing us via "
        + "not-http. "
        + "Redirecting you to HTTP.");
          
    window.location.href =
        window.location.href.replace(
                'https:', 'http:');
}
else
    (window.location.protocol == "https:") {
        console.log("you are accessing us via"
            + " our secure HTTPS protocol.");
    }
  httplink.innerHTML = "<strong>HTTP (GitHub Server)</strong>";
  httplink.src = "#";
}
if(location.hostname == "alephd.neocities.org"){
  httpslink.innerHTML = "<strong>HTTPS (Neocities Server)</strong>";
  httpslink.src = "#";
}
