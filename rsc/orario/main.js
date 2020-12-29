//Variabili per la gestione del CSS
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");


/* function trans(){ setTimeout(function(){
    video.style.opacity= "100%";
    orario.style.opacity= "120%"
    },5000);
}
*/

//Raccoglie gli orari
 function getFullData(){
    let giorno_new = new Date();
        let giorno = giorno_new.getUTCDate();
    let mese_new = new Date();
      let mese = mese_new.getUTCMonth() +1;
    let anno_new = new Date();
     let anno = anno_new.getUTCFullYear();
    let ora_new = new Date();
        let ora = ora_new.getUTCHours()+1;
    let minuti_new = new Date();
        let minuti = minuti_new.getUTCMinutes();

//Costruisce la string degli orari
const FullData = `${ora}:${minuti}`;
//Stampa la string degli orari
document.getElementById('demo').innerHTML = FullData;

//Fornisce l'opacità al video
//video.style.opacity= "60%"; 

//Dopo 7 secondi rimuove la string
setTimeout(function(){
document.getElementById('demo').innerHTML = ''
},20000);
console.log(demo);
//Dopo 5 secondi riporta l'opacità normale
trans();
}

