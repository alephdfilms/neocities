//RANDOMIZED!!!
//for /index.html.
//based on the neo-neighborhoods banner.js file. thanks! >:)
function random_imglink(){
var myimages=new Array(4)
myimages[1]="/images/randomimage/index/unfunny.png";
myimages[2]="/images/randomimage/index/contemplate.png";
myimages[3]="/images/randomimage/index/drawbttr.png";
myimages[4]="/images/randomimage/index/linksto.png";

var alttag=new Array(4)
alttag[1]="i'm so damn unfunny.";
alttag[2]="contemplate your actions.";
alttag[3]="I DRAW WAY BETTER THAN THIS. TRUST ME.";
alttag[4]="THIS LINKS TO A WEBSITE.";

var imagelinks=new Array(4)
imagelinks[1]="#";
imagelinks[2]="#";
imagelinks[3]="#";
imagelinks[4]="http://ranfren.neocities.org/";

var banner = document.getElementById("randomimage");
var y=Math.round(Math.random()*4)%4+1;
banner.innerHTML = '<a style="text-align: center;" href="'+imagelinks[y]+'"><img src="'+myimages[y]+'" width="468" height="60" border="0" title="'+alttag[y]+'" alt="'+alttag[y]+'"></a><br /><a href="'+imagelinks[y]+'">'+alttag[y]+'</a>'
}
