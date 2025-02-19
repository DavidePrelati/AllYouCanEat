var id;
id=1
var testo;
testo = "ehbd aqowo";
var testo2 = new String (' idybiwubdal')
var date = new Date ()
var giorniSettimana = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab" , "Dom"];
console.log("Id: " + id);
console.log(testo.charAt(2));
console.log(testo + testo2);
console.log(giorniSettimana);
console.log(giorniSettimana[3]);

var collega = giorniSettimana[2] + giorniSettimana[4]
console.log(collega);

/*If*/
if (testo != testo2) {
    console.log(true);
}

/*Cicli*/
for (var num=0; num<6; num++){
    console.log(num);
    
}
    

for (let i = 0; i < giorniSettimana.length; i++) {
    const element = giorniSettimana[i];
    console.log(element);
}


function caricaFile(fileName) {
    fetch(fileName)
    .then(response => response.text())
    .then(data => {
        document.getElementById('main').innerHTML = data;
        console.log("Avviato con successo" + fileName);
        
    })
    .catch(error => {
        document.getElementById('main').innerHTML = 'Errore per arrivare alla pagina'
        console.log("Errore " + error)
    })
}

document.getElementById("nigiri").addEventListener('click', function (event) {
    event.preventDefault()
     caricaFile("nigiri.html")
})
