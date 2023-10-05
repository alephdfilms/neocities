// if it isn't safe...
function notsafe() {
window.location.replace('/notsupported.html');
}

//method 1
if (window.document.documentMode) {
notsafe();
}

//method 2
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident|Edge\//.test(ua);
if (isIE) {
notsafe();
}

//method 3
function reallyIsIE() {
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

if(!reallyIsIE()) {
console.log("good job");
}else {
notsafe();
}
