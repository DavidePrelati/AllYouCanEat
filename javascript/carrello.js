// Funzione per visualizzare gli articoli nel carrello
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('lista-ordini');

    // Se il carrello è vuoto
    if (cart.length === 0) {
        cartList.innerHTML = '<li>Il tuo carrello è vuoto</li>';
    } else {
        // Aggiungi ogni prodotto nel carrello
        cartList.innerHTML = cart.map((item, index) => {
            return `
                <li>
                    <div class="card px-3 mx-4" style="width: 18rem; background-color: transparent; backdrop-filter: blur(1rem);">
                        <img src="${item.imageSrc}" class="card-img-top" alt="${item.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${item.name}</h5>
                            <p>${item.price}€</p>
                            <div class="mt-auto">
                                <button class="btn btn-secondary mb-4" onclick="removeItem(${index})">Rimuovi</button>
                            </div>
                        </div>
                    </div>
                </li>
            `;
        }).join('');
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

// Carica e mostra il carrello quando la pagina è pronta
onload = function() {
    displayCart();

    // Aggiungi evento al pulsante "Conferma ordine"
    const confirmButton = document.querySelector('.btn-primary');
    confirmButton.addEventListener('click', confirmOrder);
};
