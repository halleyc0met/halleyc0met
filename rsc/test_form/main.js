function checkLogin(){
email_get = document.getElementById('id_email').value;
psw_get = document.getElementById('id_password').value;

if(email_get == "halleyc0met" && psw_get == "123")
{
    window.location.replace("home.html");
}else{
alert("Accesso non consentito")

}} 