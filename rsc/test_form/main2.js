let conto = "";
let input = 0;
var cookie;


setConto();
function preleva(){
    // Preleva il numero inserito dall'utente e lo inserisce in una variabile numerica
    input = parseInt(document.getElementById("textinput").value);
    //Controlli per verificare che l'operazione sia valida
    if(input < 1 || input > conto ||  isNaN(input)){
        alert("Inserisci un valore valido");
    }
    else{
         let new_conto = parseInt(conto - input);
         conto = new_conto;
         console.log(new_conto);
         document.getElementById("conto").innerHTML = new_conto;
    }
/*
    if(input > conto){
        alert("Inserisci un valore valido");

    }else{
        let new_conto = (conto - input);
         conto = new_conto;
         console.log(new_conto);
         document.getElementById("conto").innerHTML = new_conto;
    }*/
}

function accredita(){
    input = parseInt(document.getElementById("textinput").value); 
    if(input < 1 || isNaN(input)){
        alert("Inserisci un valore valido")
    }else{
    let new_conto = parseInt(conto)+(input);
    conto = new_conto;
    console.log(new_conto);
    document.getElementById("conto").innerHTML = new_conto;
}
}


  

  function setCookie(nome, ggScadenza, path) {
    if (path == undefined) {
        path = "/";
    }
    var d = new Date();
    d.setTime(d.getTime() + (ggScadenza * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = nome + "=" + document.getElementById("conto").innerHTML + "; " + expires + "; path=" + path;
}

function getCookie(nome) {
    var name = nome + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
    
}

function getCookie_btn(){
var valoreLetto = getCookie('conto_saved');
alert('Il valore del cookie è: '+valoreLetto);
}

function setConto(){
    var got_Cookie = getCookie('conto_saved');
    if(got_Cookie==null||got_Cookie==false){
         conto = 5000;
    }
    else{
         conto = got_Cookie;
    }
    console.log("conto =" +conto);
    console.log("got_Cookie =" +got_Cookie);
    document.getElementById("conto").innerHTML = conto;

}

function remCookie(){
    document.cookie = "conto_saved=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}