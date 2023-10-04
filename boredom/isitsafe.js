// if it isn't safe...
function notsafe() {
window.location.replace('/notsupported.html');
}

if (window.document.documentMode) {
notsafe();
}
//if the above does not work
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident|Edge\//.test(ua);
if ( isIE ) {
notsafe();
}
function isCrappyIE() {
    var ua = window.navigator.userAgent;
    var crappyIE = false;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {// IE 10 or older => return version number        
        crappyIE = true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {// IE 11 => return version number        
        crappyIE = true;
    }
    return crappyIE;
}   
//if it REALLY sucks
if(!isCrappyIE()) {
  //
}else {
notsafe();
}
