var amount = 8
var sitebytext = new Array(amount)
let random = Math.floor(Math.random() * amount) + 1
sitebytext[1]="website by <a href='https://aleph.is-local.org' class='alephdlink'>aleph.is-local.org</a>"
sitebytext[2]="<a href='https://aleph.is-local.org' class='alephdlink'>aleph was here</a> :)"
sitebytext[3]="<a href='https://aleph.is-local.org' class='alephdlink'>boredom, inc</a> is responsible for the site."
sitebytext[4]="<a href='https://aleph.is-local.org' class='alephdlink'>aleph is safe from elimination</a>."
sitebytext[5]="<a href='https://aleph.is-local.org' class='alephdlink'>mmm delicious, web snitch knishes</a>."
sitebytext[6]="<a href='https://aleph.is-local.org' class='alephdlink'>like what you see? click here</a>."
sitebytext[7]="<a href='https://aleph.is-local.org' class='alephdlink'>free html frames @ alephd, mmm :)</a>."
sitebytext[8]="undefined"
document.write(sitebytext[random]);
