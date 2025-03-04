/*var id;
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

If
if (testo != testo2) {
    console.log(true);
}

Cicli
for (var num=0; num<6; num++){
    console.log(num);
    
}
    

for (let i = 0; i < giorniSettimana.length; i++) {
    const element = giorniSettimana[i];
    console.log(element);
}
*/




function caricaFile(fileName) {
    fetch(fileName)
    .then(response => response.text())
    .then(data => {
        document.getElementById('main').innerHTML = data;
        console.log("Avviato con successo" + fileName);

        // Riassegna i listener agli elementi appena caricati
        assegnaListenerOrdina();
    })
    .catch(error => {
        document.getElementById('main').innerHTML = 'Errore per arrivare alla pagina'
        console.log("Errore " + error)
    })
}

// Funzione per assegnare i listener agli elementi "Ordina"
function assegnaListenerOrdina() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Ottieni i dettagli del prodotto
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const imageSrc = this.closest('.card').querySelector('img').src;

            // Crea un oggetto prodotto
            const product = { name, price, imageSrc };

            // Recupera il carrello dal localStorage (se esiste)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Aggiungi il nuovo prodotto al carrello
            cart.push(product);

            // Salva il carrello aggiornato nel localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Facoltativo: Notifica l'utente che il prodotto è stato aggiunto
            alert(`Aggiunto al carrello: ${name}`);
        });
    });
}

// Carica il contenuto quando si clicca su un item del menu
document.getElementById('bevande').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("bevande.html");
})

document.getElementById('antipasti').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("antipasti.html");
})

document.getElementById('antipasti_crudi').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("antipasti_crudi.html");
})

document.getElementById("nigiri").addEventListener('click', function (event) {
    event.preventDefault();
    caricaFile("nigiri.html");
})

document.getElementById('hosomaki').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("hosomaki.html");
})

document.getElementById('uramaki').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("uramaki.html");
})

document.getElementById('special').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("special.html");
})

document.getElementById('dolci').addEventListener('click', function (event){
    event.preventDefault();
    caricaFile("dolci.html");
})
