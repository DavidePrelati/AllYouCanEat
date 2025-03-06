// Funzione per visualizzare gli articoli nel carrello
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('lista-ordini');

    // Se il carrello è vuoto
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Il tuo carrello è vuoto</p>';
    } else {
        // Crea il contenuto del carrello raggruppato ogni 2 card
        let cartContent = '';
        for (let i = 0; i < cart.length; i++) {
            // Ogni due card aggiungi un nuovo contenitore <div class="row">
            if (i % 2 === 0) {
                cartContent += '<div class="row">'; // Inizia una nuova riga
            }

            // Aggiungi la card
            cartContent += `
                <div class="col-md-6 py-2">
                    <div class="card px-3mx-4" style="background-color: transparent; backdrop-filter: blur(1rem);">
                        <img src="${cart[i].imageSrc}" class="card-img-top py-2" alt="${cart[i].name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${cart[i].name}</h5>
                            <p>${cart[i].price}€</p>
                            <div class="mt-auto">
                                <button class="btn btn-danger mb-3" onclick="removeItem(${i})">Rimuovi</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Chiudi il contenitore della riga ogni 2 card
            if (i % 2 === 1 || i === cart.length - 1) {
                cartContent += '</div>'; // Chiude il div della riga
            }
        }

        // Imposta il contenuto del carrello
        cartList.innerHTML = cartContent;
    }
}


// Funzione per rimuovere un articolo dal carrello
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Rimuovi l'elemento dal carrello usando l'indice
    cart.splice(index, 1);
    // Ritorna il carrello aggiornato nel localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Ricarica la pagina per aggiornare l'interfaccia
    displayCart();
}

// Funzione per confermare l'ordine e svuotare il carrello
function confirmOrder() {
    // Svuota il carrello
    localStorage.removeItem('cart');
    alert('Ordine effettuato con successo');
    // Ricarica la visualizzazione del carrello
    displayCart();
}

function displayTotalPrice() {
    const selection = JSON.parse(localStorage.getItem('peopleSelection')) || { people: 0, price: 0 };
    const totalPriceElement = document.querySelector('.btn[disabled]');

    if (selection.people > 0) {
        totalPriceElement.textContent = `Prezzo: ${selection.price}€ (per ${selection.people} persona/e)`;
    } else {
        totalPriceElement.textContent = 'Prezzo: 0€';
    }
}

// Carica e mostra il prezzo totale quando la pagina è pronta
onload = function() {
    displayCart();
    displayTotalPrice();

    // Aggiungi evento al pulsante "Conferma ordine"
    const confirmButton = document.querySelector('.btn-success');
    confirmButton.addEventListener('click', confirmOrder);
};
