function isIE() {
    var userAgent = navigator.userAgent;
    return /MSIE|Trident/.test(userAgent);
}
 
if (isIE()) {
    console.log("fuck you");
    window.location.replace("/notsupported.html");
}
else {
    alert("Not Internet Explorer");
}
