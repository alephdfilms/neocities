if (/msie/i.test (navigator.userAgent)) //only override IE
{
	document.nativeGetElementById = document.getElementById;
	document.getElementById = function(id)
	{
		var elem = document.nativeGetElementById(id);
		if(elem)
		{
			//make sure that it is a valid match on id
			if(elem.attributes['id'].value == id)
			{
				return elem;
			}
			else
			{
				//otherwise find the correct element
				for(var i=1;i<document.all[id].length;i++)
				{
					if(document.all[id][i].attributes['id'].value == id)
					{
						return document.all[id][i];
					}
				}
			}
		}
		return null;
	};
}
function latestchardesign() {
//automatically go to the latest design of a character
document.getElementById("latest").href = "../frames/char/blah/design_0001.html";
document.getElementById("latest_stuart").href = "../frames/char/stuart/design_0001.html";
}
function latestgraphicdesign() {
//automatically go to the latest graphic design project
document.getElementById("latest").href = null;
}
function latestcomic() {
//automatically go to the latest comic
document.getElementById("latest").href = null;
}
function latestsketch() {
//automatically go to the latest sketch
document.getElementById("latest").href = null;
}
