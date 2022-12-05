function getPassword(){
    var chars = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789&é-èçà$£?!ù%";
    var passwordLength=8;
    var password = "";
    for(var i=0;i<passwordLength;i++){
        var randomNumber = Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value=password;
}