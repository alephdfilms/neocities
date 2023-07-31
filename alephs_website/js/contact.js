let contactbox = document.getElementById("contactbox");
function emailform(){
console.log("email form pulled up.");
contactbox.innerHTML = "<form action='mailto:aleph@aleph.is-local.org' enctype='text/plain/' method='post'><label>Your username:</label><input type='text' name='name'><br><label>Your email address:</label><input type='email' name='mail'><br><label>Your comment:</label><br><input type='text' name='comment'><br><input type='submit' value='Send'> <input type='reset' value='Reset'></form>";
}
function clearbox(){
console.log("cleared!");
contactbox.innerHTML = "";
}
