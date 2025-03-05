$(document).ready(function () {
    $('#peopleCarousel').carousel({
        interval: false, 
    });
});
document.querySelectorAll('.select-people').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Ottieni i dettagli del prodotto
        const price = this.getAttribute('data-price');

        // Crea un oggetto prodotto
        const product = { price };

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