let ordini = [];

function aggiungiOrdine(nome, prezzo) {
    const ordine = { nome, prezzo };
    ordini.push(ordine);
    salvaOrdiniNelLocalStorage();
    alert(`${nome} è stato aggiunto al carrello!`);
}

function salvaOrdiniNelLocalStorage() {
    localStorage.setItem('ordini', JSON.stringify(ordini));
}

function caricaOrdiniDalLocalStorage() {
    const ordiniSalvati = localStorage.getItem('ordini');
    if (ordiniSalvati) {
        ordini = JSON.parse(ordiniSalvati);
    }
}

function aggiornaListaOrdini() {
    const listaOrdini = document.getElementById('lista-ordini');
    if (listaOrdini) {
        listaOrdini.innerHTML = '';

        ordini.forEach((ordine) => {
            const li = document.createElement('li');
            li.textContent = `${ordine.nome} - €${ordine.prezzo}`;
            listaOrdini.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    caricaOrdiniDalLocalStorage();

    const pulsantiOrdina = document.querySelectorAll('.add-to-cart');
    pulsantiOrdina.forEach((pulsante) => {
        pulsante.addEventListener('click', (event) => {
            event.preventDefault();
            const nome = pulsante.getAttribute('data-name');
            const prezzo = pulsante.getAttribute('data-price');
            aggiungiOrdine(nome, prezzo);
        });
    });

    aggiornaListaOrdini();
});