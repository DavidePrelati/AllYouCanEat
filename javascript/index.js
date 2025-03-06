function caricaFile(fileName) {
    fetch(fileName)
    .then(response => response.text())
    .then(data => {
        document.getElementById('main').innerHTML = data;
        console.log("Avviato con successo" + fileName);

        assegnaListenerOrdina();
    })
    .catch(error => {
        document.getElementById('main').innerHTML = 'Errore per arrivare alla pagina'
        console.log("Errore " + error)
    })
}

function assegnaListenerOrdina() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const imageSrc = this.closest('.card').querySelector('img').src;

            const product = { name, price, imageSrc };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart.push(product);

            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`Aggiunto al carrello: ${name}`);
        });
    });
}

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
